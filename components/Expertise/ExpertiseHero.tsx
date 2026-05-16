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
        className="absolute left-0 w-[176px] h-[176px] md:w-[200px] md:h-[200px] lg:w-[312px] lg:h-[312px]"
      />
      <Image
        src="/images/Cube.svg"
        width={128}
        height={128}
        alt=""
        className="absolute top-[286px] -left-[150px] md:top-[306px] md:-left-[150px] lg:-left-[210px] lg:top-[485px] w-[252px] h-[252px] md:w-[300px] md:h-[300px] lg:w-[395px] lg:h-[395px]"
      />
      <Image
        src="/images/Sheet.svg"
        width={128}
        height={128}
        alt=""
        className="absolute -rotate-75 top-[50px] right-[10px] md:top-[80px] md:right-[20px] lg:top-[120px] w-[159px] h-[159px] md:w-[200px] md:h-[200px] lg:w-[256px] lg:h-[256px]"
      />
      <Image
        src="/images/Ring.svg"
        width={128}
        height={128}
        alt=""
        className="absolute top-[380px] -right-[100px] md:top-[400px] md:-right-[150px] lg:top-[600px] lg:-right-[210px] w-[244px] h-[244px] md:w-[350px] md:h-[350px] lg:w-[493px] lg:h-[493px]"
      />
      <h1 className="gradient-text text-[24px] leading-[150%] md:text-[40px] lg:text-[64px] lg:leading-18 font-semibold mt-57.75 md:mt-76.5 lg:mt-87 mb-120.25 md:mb-109.75 lg:mb-144.5">
        {t("title")}
      </h1>
      <p className="text-neutral-bright-beginning text-[14px] md:text-[20px] lg:text-[22px] leading-[150%] font-semibold text-center max-w-[327px] md:max-w-[736px] mb-[96px] md:mb-[68px] lg:mb-[112px]">
        {t("description")}
      </p>
    </section>
  );
};
