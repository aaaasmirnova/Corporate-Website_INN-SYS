"use client";

import { useState } from "react";
import { Button } from "../../UI/Button";
import { statistics, reports } from "./data";
import { Statistics } from "./Statistics";
import { TabletReport } from "./TabletReport";
import { DesktopReport } from "./DesktopReport";
import { MobileReport } from "./MobileReport";
import Download from "@/public/icons/download.svg";

export const InvestorSection = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const showNextYear = () => {
    setActiveYearIndex((prev) => (prev === reports.length - 1 ? 0 : prev + 1));
  };

  const currentReport = reports[activeYearIndex];

  const pairedReports = [];
  for (let i = 0; i < reports.length; i += 2) {
    pairedReports.push(reports.slice(i, i + 2));
  }

  return (
    <section className="flex flex-col text-white bg-neutral-black-elbrus w-full mb-20 md:mb-32 lg:mb-42">
      <div className="text-center w-full">
        <h2 className="text-[24px] md:text-[32px]  lg:text-[40px]  leading-[150%] mb-24 text-center font-heading font-semibold gradient-text">
          Для инвесторов
        </h2>
      </div>

      <Statistics info={statistics} />

      <MobileReport currentReport={currentReport} showNextYear={showNextYear} />

      <TabletReport pairedReports={pairedReports} />

      <DesktopReport info={reports} />

      <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-[150%] font-regular text-neutral-500 mt-4  mx-auto mb-10 text-center order-1 md:order-2 lg:order-1">
        Отчеты обновляются ежегодно после публикации
        <br className="block md:hidden" />
        официальной отчетности
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 order-2 md:order-1 lg:order-2 md:mt-12">
        <Button customClassName="bg-neutral-bright-beginning hover:bg-button-primary-hover active:bg-neutral-300  text-[16px]  leading-150%  font-regular text-neutral-black-elbrus px-8 rounded-[12px] py-3 w-[297px] md:w-[204px] lg:w-[207px]">
          Связаться с нами
        </Button>
        <a
          href=""
          target="_blank"
          download
          className="bg-button-secondary-default hover:bg-button-secondary-hover active:bg-button-secondary-active  text-[16px]  leading-150%  font-regular text-white px-6 rounded-[12px] py-3 flex items-center justify-center  gap-2 w-[297px] md:w-[204px] lg:w-[207px]"
        >
          Устав компании
          <Download className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
