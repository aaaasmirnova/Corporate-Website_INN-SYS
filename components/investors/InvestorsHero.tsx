import { useTranslations } from "next-intl";
import Image from "next/image";

export const InvestorsHero = () => {
  const t = useTranslations();
  return (
    <section className="container flex flex-col items-center">
      <h1 className="gradient-text text-[24px] leading-[150%] md:text-[40px] lg:text-[64px] lg:leading-18 font-semibold mt-57.75 md:mt-40 lg:mt-65 mb-139.5 md:mb-87 lg:mb-141.5">
        {t("Investors.InvestorsHero.title")}
      </h1>
      <Image
        src="/images/investors/investors_hero_desktop.svg"
        alt=""
        fill
        className="object-contain mt-[155px] md:mt-[89px] lg:mt-[155px]"
      />
      <p className="text-neutral-bright-beginning text-[18px] md:text-[24px] lg:text-[28px] leading-[150%] font-semibold text-center md:max-w-[600px] lg:max-w-[736px] md:mb-35 lg:mb-45">
        {t("Investors.InvestorsHero.description1")}
      </p>
      <p className="text-neutral-bright-beginning text-[14px] lg:text-[18px] leading-[150%] font-medium text-center mb-6">
        {t("Investors.InvestorsHero.description2")}
      </p>
      <p className="text-neutral-bright-beginning text-[14px] lg:text-[18px] leading-[150%] font-medium text-center mb-6">
        {t("Investors.InvestorsHero.description3")}
      </p>
      <p className="text-neutral-bright-beginning text-[14px] lg:text-[18px] lg:text-[18px] leading-[150%] font-medium text-center">
        {t("Investors.InvestorsHero.description4")}
      </p>
    </section>
  );
};
