import { useTranslations } from "next-intl";
import { CareerVacancies } from "./CareerVacancies";
import { CareerAdvantages } from "./CareerAdvantages";

export const Career = () => {
  const t = useTranslations();
  return (
    <section className="container  flex flex-col items-center">
      <h1 className="gradient-custom-career-hero text-[24px] leading-[150%] md:text-[40px] lg:text-[64px] lg:leading-[72px] font-semibold w-[300px] md:w-[600px] lg:w-[1100px] mb-4 lg:mb-10 text-center">
        {t("CareerHero.title")}
      </h1>
      <p className="text-neutral-300 text-[16px] lg:text-[24px] leading-[150%] font-normal w-[300px] md:w-[700px] lg:w-[1024px] text-center mb-77 md:mb-45 lg:mb-51">
        {t("CareerHero.description")}
      </p>
      <CareerAdvantages />
      <CareerVacancies />
    </section>
  );
};
