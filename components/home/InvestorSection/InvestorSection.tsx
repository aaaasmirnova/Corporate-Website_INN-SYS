"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "../../UI/Button";
import { statistics, reports } from "./data";
import { Statistics } from "./Statistics";
import { TabletReport } from "./TabletReport";
import { DesktopReport } from "./DesktopReport";
import { MobileReport } from "./MobileReport";
import Download from "@/public/icons/download.svg";

export const InvestorSection = () => {
  const t = useTranslations("Home");

  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const showNextYear = () => {
    setActiveYearIndex((prev) => (prev === reports.length - 1 ? 0 : prev + 1));
  };

  const currentReport = reports[activeYearIndex];

  const pairedReports = [];
  for (let i = 0; i < reports.length; i += 2) {
    pairedReports.push(reports.slice(i, i + 2));
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="container flex flex-col text-white bg-neutral-black-elbrus w-full mb-20 md:mb-32 lg:mb-42">
      <div className="text-center w-full">
        <h2 className="text-[24px] md:text-[32px]  lg:text-[40px]  leading-[150%] mb-11 md:mb-18 lg:mb-24 text-center font-semibold gradient-text">
          {t("For_investors.title")}
        </h2>
      </div>

      <Statistics info={statistics} />

      <MobileReport currentReport={currentReport} showNextYear={showNextYear} />

      <TabletReport pairedReports={pairedReports} />

      <DesktopReport info={reports} />

      <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-[150%] font-regular text-neutral-500 mt-4  mx-auto mb-10 text-center order-1 md:order-2 lg:order-1">
        {t("For_investors.reports")}
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2.5 lg:gap-4 order-2 md:order-1 lg:order-2 md:mt-12">
        <Button
          customClassName="bg-neutral-bright-beginning hover:bg-button-primary-hover active:bg-neutral-300  text-[16px]  leading-150%  font-regular text-neutral-black-elbrus px-[67px] md:px-7.5 py-3  lg:px-8 rounded-[12px]  whitespace-nowrap"
          onClick={scrollToForm}
        >
          {t("For_investors.button_contact")}
        </Button>

        <a
          href=""
          target="_blank"
          download
          className="bg-button-secondary-default hover:bg-button-secondary-hover active:bg-button-secondary-active  text-[16px]  leading-150%  font-regular text-white px-15 md:px-7  lg:px-6 rounded-[12px] py-3 flex items-center justify-center  gap-2 whitespace-nowrap "
        >
          {t("For_investors.button_constitution")}
          <Download className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
