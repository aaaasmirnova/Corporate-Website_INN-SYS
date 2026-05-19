"use client";

import { useState } from "react";
import {
  cards,
  placeOfWorks,
  positions,
  contracts,
  vacancies,
  FILTER_KEYS,
  INITIAL_VACANCIES_LIMIT,
} from "./data";
import { Card } from "./Card";
import { FiltersButton } from "./FiltersButton";
import { VacancyCard } from "./VacancyCard";
import { SendResumeCard } from "./SendResumeCard";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface FiltersState {
  selectedLocations: string[];
  selectedPositions: string[];
  selectedContracts: string[];
}

export const Career = () => {
  const t = useTranslations("Home");

  const [filters, setFilters] = useState<FiltersState>({
    selectedLocations: [],
    selectedPositions: [],
    selectedContracts: [],
  });

  const chooseLocation = (location: string) => {
    if (location === FILTER_KEYS.ALL_CITIES) {
      setFilters({ ...filters, selectedLocations: [] });
    } else if (filters.selectedLocations.includes(location)) {
      setFilters({
        ...filters,
        selectedLocations: filters.selectedLocations.filter(
          (l) => l !== location,
        ),
      });
    } else {
      setFilters({
        ...filters,
        selectedLocations: [...filters.selectedLocations, location],
      });
    }
  };

  const choosePosition = (position: string) => {
    if (position === FILTER_KEYS.ALL_DIRECTIONS) {
      setFilters({ ...filters, selectedPositions: [] });
    } else if (filters.selectedPositions.includes(position)) {
      setFilters({
        ...filters,
        selectedPositions: filters.selectedPositions.filter(
          (p) => p !== position,
        ),
      });
    } else {
      setFilters({
        ...filters,
        selectedPositions: [...filters.selectedPositions, position],
      });
    }
  };

  const chooseContract = (contract: string) => {
    if (filters.selectedContracts.includes(contract)) {
      setFilters({
        ...filters,
        selectedContracts: filters.selectedContracts.filter(
          (c) => c !== contract,
        ),
      });
    } else {
      setFilters({
        ...filters,
        selectedContracts: [...filters.selectedContracts, contract],
      });
    }
  };

  const getFilteredVacancies = () => {
    let filtered = vacancies;

    if (filters.selectedLocations.length > 0) {
      filtered = filtered.filter((v) =>
        filters.selectedLocations.includes(v.location),
      );
    }

    if (filters.selectedPositions.length > 0) {
      filtered = filtered.filter((v) =>
        filters.selectedPositions.includes(v.position),
      );
    }

    if (filters.selectedContracts.length > 0) {
      filtered = filtered.filter((v) =>
        filters.selectedContracts.includes(v.contract),
      );
    }

    return filtered;
  };

  const filteredVacancies = getFilteredVacancies();

  return (
    <section className="container flex flex-col  text-white bg-neutral-black-elbrus w-full mb-19 md:mb-16 lg:mb-47">
      <div className="text-center w-full">
        <h2 className="text-[24px] md:text-[32px]  lg:text-[40px]  leading-[150%] mb-11 md:mb-16 lg:mb-24  font-heading font-semibold gradient-text inline-block">
          {t("career_block.title")}
        </h2>
      </div>
      <div className="relative scroll-gradient-container">
        <div className="overflow-x-auto hide-scroll pb-4 -mx-4 px-4 md:overflow-x-visible md:mx-0 md:px-0">
          <div className="flex md:gap-y-10 md:gap-x-20 lg:gap-x-6 lg:gap-y-10 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6.5 md:mb-7.5 lg:mb-12">
            {cards.map((card, index) => (
              <Card info={card} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto hide-scroll md:overflow-x-visible  flex gap-2  mb-4 -mx-4 px-4 md:mx-0 md:px-0">
        {placeOfWorks.map((place, index) => (
          <FiltersButton
            text={place}
            key={index}
            changeFilters={() => chooseLocation(place)}
            isActive={
              (place === FILTER_KEYS.ALL_CITIES &&
                filters.selectedLocations.length === 0) ||
              filters.selectedLocations.includes(place)
            }
          />
        ))}
      </div>

      <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 md:gap-x-8 md:gap-y-4 mb-12">
        <div className="overflow-x-auto hide-scroll pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
          <div className="flex gap-2 min-w-max md:min-w-0">
            {positions.map((position, index) => (
              <FiltersButton
                text={position}
                key={index}
                changeFilters={() => choosePosition(position)}
                isActive={
                  (position === FILTER_KEYS.ALL_DIRECTIONS &&
                    filters.selectedPositions.length === 0) ||
                  filters.selectedPositions.includes(position)
                }
              />
            ))}
          </div>
        </div>
        {/* <div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-full lg:w-full lg:justify-between"> */}
        <div className="flex gap-2 shrink-0">
          {contracts.map((contract, index) => (
            <FiltersButton
              text={contract}
              key={index}
              changeFilters={() => chooseContract(contract)}
              isActive={filters.selectedContracts.includes(contract)}
            />
          ))}
        </div>
        <div className="md:order-last lg:order-0 lg:ml-auto">
          <Link href="/career">
            <FiltersButton
              text={"filters.all_vacancies"}
              customClassName={"btn-default"}
            />
          </Link>
        </div>
        {/* </div> */}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVacancies.slice(0, INITIAL_VACANCIES_LIMIT).map((vacancy) => (
          <VacancyCard info={vacancy} key={vacancy.id} />
        ))}

        <SendResumeCard />
      </div>
    </section>
  );
};
