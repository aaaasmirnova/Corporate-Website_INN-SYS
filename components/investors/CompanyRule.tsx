import { useTranslations } from "next-intl";
import Link from "next/link";
import OpenIcon from "@/public/icons/investors/open.svg";
import Download from "@/public/icons/download.svg";
import Image from "next/image";

export const CompanyRule = () => {
  const t = useTranslations();
  return (
    <section className="container relative overflow-hidden">
      <div className="bg-neutral-900 rounded-[24px] md:rounded-[50px] px-6 py-6 md:px-8 md:py-8 lg:px-20 lg:py-16">
        <h3 className="text-primary-5 text-[24px] md:text-[32px] lg:text-[40px] leading-[150%] font-semibold mb-[135px] md:mb-[77px] lg:mb-6">
          {t("Investors.FinancialData.titleRule")}
        </h3>
        <p className="hidden md:block text-neutral-bright-beginning lg:text-[18px] leading-[150%] font-medium md:w-[400px] lg:w-[560px] mb-12 lg:mb-[159px]">
          {t("Investors.FinancialData.descriptionRule")}
        </p>

        <div className="relative z-10 flex flex-col gap-4  items-center md:items-start">
          <Link
            href=""
            className="flex items-center justify-center gap-2 bg-button-primary text-neutral-black-elbrus px-[68px] py-3 md:px-[52px] w-[280px] md:w-[192px] rounded-[12px]"
          >
            {t("Investors.FinancialData.readRuleButton")}
            <OpenIcon className="w-4 h-4" fill="#0d0c0c" />
          </Link>
          <a
            href=""
            className="flex items-center justify-center gap-2 text-[16px] leading-[150%] bg-surface-3 text-neutral-bright-beginning rounded-[12px] px-8 py-3 md:px-12 w-[280px] md:w-[192px] text-center font-open-sans"
            target="_blank"
            download
          >
            {t("Investors.FinancialData.downloadButton")}
            <Download className="w-4 h-4" fill="#0d0c0c" />
          </a>
        </div>
        <Image
          src="/images/investors/logo_inv_desk.png"
          width={550}
          height={550}
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 lg:-bottom-10 lg:right-20 w-[238px] h-[310px] md:w-[300px] md:h-[335px] lg:w-[550px] lg:h-[550px] z-0"
        />
      </div>
    </section>
  );
};
