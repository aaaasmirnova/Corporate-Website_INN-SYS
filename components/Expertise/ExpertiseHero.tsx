import { useTranslations } from "next-intl";
import Image from "next/image";

export const ExpertiseHero = () => {
  const t = useTranslations("Expertise");
  return (
    <section className="container relative flex flex-col items-center">
      <Image
        src="/images/Star.svg"
        width={128}
        height={128}
        alt=""
        className="absolute left-0 w-44 h-44 md:w-50 md:h-50 lg:w-78 lg:h-78"
      />
      <Image
        src="/images/Cube.svg"
        width={128}
        height={128}
        alt=""
        className="absolute top-71.5 -left-37.5 md:top-76.5 md:-left-37.5 lg:-left-52.5 lg:top-121.25 w-63 h-63 md:w-75 md:h-75 lg:w-98.75 lg:h-98.75"
      />
      <Image
        src="/images/Sheet.svg"
        width={128}
        height={128}
        alt=""
        className="absolute -rotate-75 top-12.5 right-2.5 md:top-20 md:right-5 lg:top-30 w-39.75 h-39.75 md:w-50 md:h-50 lg:w-64 lg:h-64"
      />
      <Image
        src="/images/Ring.svg"
        width={128}
        height={128}
        alt=""
        className="absolute top-95 -right-25 md:top-100 md:-right-37.5 lg:top-150 lg:-right-52.5 w-61 h-61 md:w-87.5 md:h-87.5 lg:w-123.25 lg:h-123.25"
      />
      <h1 className="gradient-text text-[24px] leading-[150%] md:text-[40px] lg:text-[64px] lg:leading-18 font-semibold mt-57.75 md:mt-76.5 lg:mt-87 mb-120.25 md:mb-109.75 lg:mb-144.5">
        {t("title")}
      </h1>
      <p className="text-neutral-bright-beginning text-[14px] md:text-[20px] lg:text-[22px] leading-[150%] font-semibold text-center max-w-81.75 md:max-w-184">
        {t("description")}
      </p>
    </section>
  );
};
