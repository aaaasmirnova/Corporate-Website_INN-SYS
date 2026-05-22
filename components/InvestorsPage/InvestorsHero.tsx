import { useTranslations } from "next-intl";
import Image from "next/image";

export const InvestorsHero = () => {
  const t = useTranslations("Investors");
  return (
    <section className="flex flex-col items-center mb-24 md:mb-45 lg:mb-59 w-full">
      <div className="flex flex-col items-center">
        <h1 className="gradient-text text-[24px] leading-[150%] md:text-[40px] lg:text-[64px] lg:leading-18 font-semibold mt-57.75 md:mt-40 lg:mt-87 mb-38.75 md:mb-22.25 lg:mb-38.75">
          {t("InvestorsHero.title")}
          {t("InvestorsHero.title")}
        </h1>
      </div>
      <div className="relative w-full h-50 md:h-75 lg:h-100 mb-8 md:mb-12 lg:mb-16">
        <Image
          src="/images/investors/investors_hero_desktop.svg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-black-elbrus via-transparent to-transparent pointer-events-none" />
      </div>
      <p className="text-neutral-bright-beginning text-[18px] md:text-[24px] lg:text-[28px] leading-[150%] font-semibold text-center md:max-w-150 lg:max-w-184 mb-24 md:mb-35 lg:mb-45">
        {t("InvestorsHero.description1")}
        {t("InvestorsHero.description1")}
      </p>
      <p className="text-neutral-bright-beginning text-[14px] lg:text-[18px] leading-[150%] font-medium text-center mb-6">
        {t("InvestorsHero.description2")}
        {t("InvestorsHero.description2")}
      </p>
      <p className="text-neutral-bright-beginning text-[14px] lg:text-[18px] leading-[150%] font-medium text-center mb-6">
        {t("InvestorsHero.description3")}
        {t("InvestorsHero.description3")}
      </p>
      <p className="text-neutral-bright-beginning text-[14px] lg:text-[18px]  leading-[150%] font-medium text-center">
        {t("InvestorsHero.description4")}
        {t("InvestorsHero.description4")}
      </p>
    </section>
  );
};
