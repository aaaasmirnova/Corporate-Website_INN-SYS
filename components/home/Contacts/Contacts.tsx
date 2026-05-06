"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "../../UI/Button";
import Link from "next/link";

export const Contacts = () => {
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
    <section className="container text-white bg-neutral-black-elbrus relative md:md:min-h-194">
      <div className="text-center w-full">
        <h3 className="text-[24px] md:text-[32px]  lg:text-[40px]  leading-[150%] mb-12 md:mb-24 text-center font-semibold gradient-text">
          {t("contacts.title")}
        </h3>
      </div>

      <div className="flex items-center md:justify-start lg:mb-50 lg:w-screen">
        <div className="flex flex-col max-w-87 w-[22%]">
          <p className="text-neutral-bright-beginning font-medium text-[16px] lg:text-[18px]  leading-5 lg:leading-6 text-center md:text-left mb-8">
            {t("contacts.address")}
          </p>
          <a
            href="mailto:innovaticasystems@inbox.ru"
            className="text-brand-400 hover:text-link-hover active:text-link-active mb-4 md:mb-2 text-[16px] lg:text-[18px]  leading-5 lg:leading-6"
          >
            {t("contacts.email_1")}
          </a>
          <a
            href="mailto:systemsinnovatica@gmail.com"
            className="text-neutral-200 hover:text-link-hover active:text-link-active mb-9 md:mb-4 lg:mb-8 text-[16px] lg:text-[18px]  leading-5 lg:leading-6"
          >
            {t("contacts.email_2")}
          </a>
          <div className="flex flex-col items-center md:items-start">
            <Button
              customClassName="bg-neutral-bright-beginning hover:bg-button-primary-hover active:bg-neutral-300 text-[16px] leading-6 text-neutral-black-elbrus px-6 rounded-[12px] py-3 mb-6 font-open-sans"
              onClick={scrollToForm}
            >
              {t("contacts.discuss")}
            </Button>

            <a className="w-49.25 text-center hover:text-link-hover active:text-link-active text-[13px] md:text-[14px] lg:text-[16px] leading-5 font-semibold">
              {t("contacts.our_resources")}
            </a>
          </div>
        </div>
        <div className="hidden md:block relative max-w-353 w-[80%] z-0 pointer-events-none">
          <div className="mx-auto">
            <Image
              src="/images/map-big.png"
              alt={t("contacts.map_alt")}
              width={1412}
              height={776}
              className="w-full h-auto mx-auto max-w-353"
            />
            <div className="absolute w-3 h-3 rounded-full bg-brand-400 bottom-[22%] left-[5.5%] shadow-[0_0_0_4px_rgba(38,199,255,0.3)] animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
