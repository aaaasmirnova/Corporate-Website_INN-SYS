"use client";
import { useState } from "react";
import { vacancies } from "./data";
import { Pagination } from "./Pagination";

export const positions = [
  { nameDisplay: "Все направления", nameFilter: "Все направления" },
  { nameDisplay: "Дизайн", nameFilter: "Design" },
  { nameDisplay: "Аналитика", nameFilter: "Analytics" },
  { nameDisplay: "Backend", nameFilter: "Backend" },
  { nameDisplay: "ML", nameFilter: "ML" },
  { nameDisplay: "Другие вакансии", nameFilter: "Другие вакансии" },
];
const mainCategories = ["Design", "Analytics", "Backend", "ML"];
const VACANCIES_PER_PAGE = 5;

export const CareerVacancies = () => {
  const [selectedPosition, setSelectedPosition] =
    useState<string>("Все направления");
  const [visibleVacancyId, setVisibleVacancyId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const choosePosition = (position: string) => {
    setSelectedPosition(position);
    setCurrentPage(1);
  };

  const getFilteredVacanciesList = () => {
    let filtered = vacancies;

    if (selectedPosition === "Все направления") {
      return filtered;
    } else if (selectedPosition === "Другие вакансии") {
      filtered = filtered.filter((v) => !mainCategories.includes(v.position));
    } else {
      filtered = filtered.filter((v) => v.position === selectedPosition);
    }

    return filtered;
  };

  const filteredVacancies = getFilteredVacanciesList();

  const changeVisibilityOfText = (vacancyId: number) => {
    setVisibleVacancyId(visibleVacancyId === vacancyId ? null : vacancyId);
  };

  const totalPages = Math.ceil(filteredVacancies.length / VACANCIES_PER_PAGE);
  const startIndex = (currentPage - 1) * VACANCIES_PER_PAGE;
  const paginatedVacancies = filteredVacancies.slice(
    startIndex,
    startIndex + VACANCIES_PER_PAGE,
  );

  return (
    <section
      id="vacancies-section"
      className="lg:max-w-[1036px] w-full mb-[100px] md:mb-[176px] lg:mb-[208px]"
    >
      <div className="relative mb-15.5 md:mb-22 lg:mb-30">
        <div className="overflow-x-auto hide-scroll pb-4 -mx-4 px-4 md:overflow-x-visible md:mx-0 md:px-0">
          <div className="flex md:justify-center min-w-max md:min-w-min">
            <div className="bg-surface-1 p-1 rounded-[18px] flex gap-1">
              {positions.map((position, index) => (
                <button
                  className={` text-[14px] md:text-[16px] leading-[150%] font-open-sans flex-shrink-0 whitespace-nowrap min-w-max hover:text-button-primary  hover: bg-button-secondary-active ${
                    selectedPosition === position.nameFilter
                      ? "bg-surface-3 text-button-primary font-normal px-6 py-3 rounded-[12px]"
                      : "bg-surface-1 text-neutral-300 hover:bg-surface-2 px-4 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-[12px]"
                  }`}
                  onClick={() => choosePosition(position.nameFilter)}
                  key={index}
                >
                  {position.nameDisplay}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {paginatedVacancies.map((vacancy, index) => (
          <div
            key={vacancy.id}
            className={`relative pb-12 ${"max-lg:after:absolute max-lg:after:bottom-6 max-lg:after:left-0 max-lg:after:w-full max-lg:after:h-px max-lg:after:bg-neutral-700"} ${
              visibleVacancyId === vacancy.id
                ? "lg:after:absolute lg:after:bottom-6 lg:after:left-0 lg:after:w-full lg:after:h-px lg:after:bg-neutral-700"
                : ""
            }`}
          >
            <div className="flex mb-3">
              <p className="text-neutral-300 text-[14px] md:text-[16px] after:content-['•'] after:mx-2 font-open-sans">
                {vacancy.position}
              </p>
              <p className="text-neutral-300 text-[14px] md:text-[16px] after:content-['•'] after:mx-2 font-open-sans">
                {vacancy.location}
              </p>
              <p className="text-neutral-300 text-[14px] md:text-[16px] font-open-sans">
                {vacancy.contract}
              </p>
            </div>
            <p className="text-neutral-0 text-[18px] md:text-[24px] lg:text-[28px] font-semibold mb-4 md:mb-6 lg:mb-4">
              {vacancy.positionDisplay}
            </p>
            <p className="text-neutral-300 text-[14px] md:text-[16px] leading-[150%] mb-5 lg:mb-6">
              {visibleVacancyId === vacancy.id
                ? vacancy.description
                : vacancy.descriptionShort}
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:flex-nowrap sm:justify-between ">
              <button
                className="text-neutral-0 text-[16px] px-8 py-3 font-open-sans"
                onClick={() => changeVisibilityOfText(vacancy.id)}
              >
                {visibleVacancyId === vacancy.id ? "Скрыть текст" : "Подробнее"}
              </button>
              <button className="bg-button-secondary-default text-neutral-0 text-[16px] px-8 py-3 rounded-[12px] leading-[150%] hover:bg-button-secondary-active!">
                Откликнуться
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </section>
  );
};
