import { useTranslations } from "next-intl";
import Link from "next/link";
import OpenIcon from "@/public/icons/investors/open.svg";
import Download from "@/public/icons/download.svg";
import Image from "next/image";

export const CompanyRule = () => {
  const t = useTranslations("Investors");
  return (
    <section className="container mb-25.25 md:mb-50 lg:mb-59.5">
      <div className="relative  bg-neutral-900 rounded-3xl md:rounded-[50px] px-6 py-6 md:px-8 md:py-8 lg:px-20 lg:py-16 overflow-hidden  mb-24 md:mb-45 lg:mb-59">
        <h3 className="text-primary-5 text-[24px] md:text-[32px] lg:text-[40px] leading-[150%] font-semibold mb-33.75 md:mb-27.5 lg:mb-62">
          {t("FinancialData.titleRule")}
        </h3>
        <div className="relative z-10 flex flex-col gap-4  items-center md:items-start">
          <Link
            href=""
            className="flex items-center justify-center gap-2 bg-button-primary  hover:bg-button-primary-hover active:bg-neutral-300 text-neutral-black-elbrus px-17 py-3 md:px-13 w-70 md:w-48 rounded-xl"
          >
            {t("FinancialData.readRuleButton")}
            <OpenIcon className="w-4 h-4" fill="#0d0c0c" />
          </Link>
          <a
            href=""
            className="flex items-center justify-center gap-2 text-[16px] leading-[150%] bg-surface-3 hover:bg-button-secondary-hover active:bg-button-secondary-active text-neutral-bright-beginning rounded-xl px-8 py-3 md:px-12 w-70 md:w-48 text-center font-open-sans"
            target="_blank"
            download
          >
            {t("FinancialData.downloadButton")}
            <Download className="w-4 h-4" fill="#0d0c0c" />
          </a>
        </div>
        <Image
          src="/images/investors/logo_inv_desk.png"
          width={550}
          height={550}
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 lg:-bottom-10 lg:right-20 w-59.5 h-77.5 md:w-75 md:h-83.75 lg:w-137.5 lg:h-137.5 z-0"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-neutral-bright-beginning text-[16px] md:text-[28px] leading-[150%] font-medium md:font-semibold min-w-70 md:w-145 text-center">
          {t("FinancialData.descriptionAfterRule1")}
        </p>
        <p className="text-neutral-bright-beginning text-[16px] md:text-[28px] leading-[150%] font-medium md:font-semibold min-w-70 text-center">
          {t("FinancialData.descriptionAfterRule2")}
        </p>
      </div>
    </section>
  );
};
