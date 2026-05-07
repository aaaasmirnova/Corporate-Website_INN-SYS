"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/UI/Button";
import React from "react";

export const HeroSection = () => {
  const t = useTranslations("Home");

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="w-full h-lvh flex flex-col items-center py-58 bg-[url(../public/assets/png/bg-hero.png)] bg-hero bg-no-repeat bg-center bg-cover"
    >
      <h1 className="font-heading font-semibold text-neutral-bright-beginning text-[24px] md:text-[32px] xl:text-[64px]">{t("title")}</h1>
      <p className="max-w-81.75 md:max-w-130.5 xl:max-w-160.75 my-16 text-neutral-bright-beginning text-center font-paragraph text-[14px] md:text-[18px] xl:text-[18px]">
        {t("description1")}
        <span className="block mt-6 sm:inline sm:mt-0">{t("description2")}</span>
      </p>
      <Button
        customClassName={"my-16 py-3 px-8 bg-neutral-bright-beginning hover:bg-button-primary-hover active:bg-neutral-300 rounded-xl font-[16px] font-open-sans"}
        onClick={scrollToForm}
      >
        {t("button")}
      </Button>
      {/* <button className="cursor-pointer my-16 py-3 px-8 bg-neutral-bright-beginning hover:bg-button-primary-hover active:bg-neutral-300 rounded-xl font-[16px] font-open-sans transition-250ms">{t("button")}</button> */}
    </section>
  );
};
