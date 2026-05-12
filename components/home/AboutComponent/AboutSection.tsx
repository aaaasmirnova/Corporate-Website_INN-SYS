import { useTranslations } from "next-intl";
import React from "react";

export const AboutSection = () => {
  const t = useTranslations("Home");

  return (
    <section
      id="about"
      className="w-full flex flex-col content-center items-center gap-8 pt-58 pb-36 bg-neutral-black-elbrus"
    >
      <p className="max-w-81.75 md:max-w-122 xl:max-w-132 text-neutral-bright-beginning text-center font-paragraph text-[16px] xl:text-5.5 leading-normal">{t("section1.description1")}</p>
      <p className="max-w-81.75 md:max-w-122 xl:max-w-132 text-neutral-bright-beginning text-center font-paragraph text-[16px] xl:text-5.5 leading-normal">{t("section1.description2")}</p>
    </section>
  );
};
