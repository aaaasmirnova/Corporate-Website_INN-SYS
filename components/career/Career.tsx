import { useLocale, useTranslations } from "next-intl";
import { CareerVacancies } from "./CareerVacancies";
import { CareerAdvantages } from "./CareerAdvantages";

export const Career = () => {
  const t = useTranslations("Career");
  const locale = useLocale();
  return (
    <section className="container  flex flex-col items-center">
      <h1 className="flex flex-wrap gradient-custom-career-hero text-[24px] leading-[150%] md:text-[40px] lg:text-[64px] lg:leading-18 font-semibold mb-4 lg:mb-10 text-center mt-57.75 md:mt-40 lg:mt-87">
        {t("CareerHero.title")}
      </h1>
      <p className="text-neutral-300 text-[16px] lg:text-[24px] leading-[150%] font-normal w-75 md:w-175 lg:w-5xl text-center mb-77 md:mb-45 lg:mb-51">
        {t("CareerHero.description")}
      </p>
      <CareerAdvantages />
      <CareerVacancies />
    </section>
  );
};
