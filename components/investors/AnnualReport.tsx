"use client";

import { useTranslations } from "next-intl";
import { reports } from "./data";
import Download from "@/public/icons/download.svg";
import OpenIcon from "@/public/icons/investors/open.svg";
import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";

export const AnnualReport = () => {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastReportRef = useRef<HTMLDivElement>(null);

  // Сортировка по возрастанию года (2024 → 2025)
  const sortedReports = [...reports].sort(
    (a, b) => parseInt(a.year) - parseInt(b.year),
  );

  // Функция скролла к последнему элементу
  const scrollToLast = useCallback(() => {
    if (lastReportRef.current) {
      lastReportRef.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "start",
      });
    } else if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollLeft = scrollWidth - clientWidth;
    }
  }, []);

  // Скролл к последнему элементу при загрузке и после рендера
  useEffect(() => {
    const timer = setTimeout(scrollToLast, 100);
    return () => clearTimeout(timer);
  }, [scrollToLast]);

  // Дополнительный скролл при изменении размера окна
  useEffect(() => {
    window.addEventListener("resize", scrollToLast);
    return () => window.removeEventListener("resize", scrollToLast);
  }, [scrollToLast]);

  return (
    <section className="container flex flex-col items-center w-full">
      <div className=" flex flex-col items-center">
        <p className="text-neutral-bright-beginning text-[16px] md:text-[24px] lg:text-[28px] leading-[150%] font-medium text-center w-[375px] md:w-[600px] lg:w-[803px] mb-24  md:mb-25 lg:mb-30">
          {t("Investors.FinancialData.description")}
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto hide-scroll"
      >
        <div className="flex gap-[27px] md:gap-[20px] lg:gap-[40px] mb-8 md:mb-10 lg:mb-15">
          {sortedReports.map((report, index) => (
            <div
              key={report.year}
              ref={index === sortedReports.length - 1 ? lastReportRef : null}
              className="bg-neutral-900 rounded-[50px] px-6 py-6 md:px-8 md:py-8 lg:px-[80px] lg:py-[67px] flex-shrink-0 overflow-hidden relative w-full"
            >
              <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-6 mb-6 md:mb-4 lg:mb-6 relative z-10">
                <h3 className="text-primary-5 text-[24px] md:text-[32px] lg:text-[40px] leading-[150%] font-semibold ">
                  {t("Investors.FinancialData.titleReport")}
                </h3>
                <span className="inline-flex items-center justify-center text-neutral-bright-beginning bg-neutral-800 text-[12px] md:text-[28px] lg:text-[32px] md:leading-[normal] px-4 py-1.5 md:px-7 md:py-4 lg:px-8 lg:py-4 font-medium rounded-[16px] md:rounded-[999px]">
                  {report.year}
                </span>
              </div>
              <p className="text-neutral-bright-beginning text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] font-medium min-w-[280px] md:w-[560px] mb-12 md:mb-11  lg:mb-[159px]">
                {t("Investors.FinancialData.descriptionReport")}
              </p>
              <div className="flex flex-col gap-4 relative z-20">
                <a
                  href={report.reportUrl}
                  className="flex items-center justify-center gap-2 text-[16px] leading-[150%] bg-button-primary text-neutral-black-elbrus rounded-[12px] py-3 text-center whitespace-nowrap w-[281px] md:w-[281px] font-open-sans"
                  target="_blank"
                  download
                >
                  {t("Investors.FinancialData.buttonReport")}
                  <Download className="w-4 h-4" fill="#0d0c0c" />
                </a>
                <a
                  href={report.presentationUrl}
                  className="flex items-center justify-center gap-2 text-[16px] leading-[150%] bg-surface-3 text-neutral-bright-beginning rounded-[12px] py-3 px-8 text-center w-[279px] md:w-[281px] font-open-sans"
                  target="_blank"
                  download
                >
                  {t("Investors.FinancialData.presentation")}
                  <OpenIcon className="w-4 h-4" />
                </a>
              </div>
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <Image
                  src={report.imageUrl}
                  alt=""
                  fill
                  className="object-contain object-left-bottom"
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
