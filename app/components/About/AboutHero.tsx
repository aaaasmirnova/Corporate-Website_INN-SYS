import { useTranslations } from "next-intl";
import Image from "next/image";

export const AboutHero = () => {
  const t = useTranslations();
  return (
    <section className="container relative w-full h-134 md:h-150.5 lg:h-294 flex flex-col mb-29 md:mb-7.25 lg:mb-13.75 bg-[url('/images/AboutHeroDesktop.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative z-10 flex flex-col  items-center h-full px-4 md:px-8 lg:px-24 mt-49 md:mt-33.5 lg:mt-64">
        <p className="text-neutral-bright-beginning text-[13px] md:text-[20px] lg:text-[22px] leading-[150%] mb-2 md:mb-4 font-semibold">
          {t("About.AboutHero.description")}
        </p>
        <h1 className="gradient-text-hero-about text-[24px] md:text-[44px] lg:text-[64px] leading-[150%] md:leading-18 text-center font-semibold">
          {t("About.AboutHero.title")}
        </h1>
      </div>
    </section>
  );
};
