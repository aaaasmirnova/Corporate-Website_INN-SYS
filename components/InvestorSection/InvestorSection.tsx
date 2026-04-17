"use client";

import { useState } from "react";
import { Button } from "../UI/Button";
import { statistics, reports } from "../InvestorSection/data";
import { Statistics } from "./Statistics";
import { TabletReport } from "./TabletReport";
import { DesktopReport } from "./DesktopReport";
import { MobileReport } from "./MobileReport";

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
    <section className="flex flex-col text-white bg-neutral-black-elbrus w-full mb-50">
      <div className="text-center w-full">
        <h2 className="text-[24px] md:text-[32px]  lg:text-[40px]  leading-[150%] mb-24 text-center font-heading font-semibold gradient-text">
          Для инвесторов
        </h2>
      </div>

      <Statistics info={statistics} />

      <MobileReport currentReport={currentReport} showNextYear={showNextYear} />

      <TabletReport pairedReports={pairedReports} />

      <DesktopReport info={reports} />

      <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-[150%] font-regular text-neutral-500 mt-4 text-center mb-10">
        Отчеты обновляются ежегодно после публикации официальной отчетности
      </p>

      <div className="flex justify-center gap-4">
        <Button
          text="Связаться с нами"
          customClassName="bg-neutral-bright-beginning hover:bg-button-primary-hover text-[16px]  leading-150%  font-regular text-neutral-black-elbrus px-8 rounded-[12px] py-3"
        />
        <Button
          text="Устав компании"
          customClassName="bg-button-secondary-default text-[16px]  leading-150%  font-regular text-white px-6 rounded-[12px] py-3"
        />
      </div>
    </section>
  );
};
