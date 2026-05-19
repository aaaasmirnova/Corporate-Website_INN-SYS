"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const AboutPhilosophy = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlayingRef = useRef(false);
  const hasEndedRef = useRef(false);

  const t = useTranslations("About");

  return (
    <section className="container flex flex-col items-center text-white bg-neutral-black-elbrus">
      <h2 className="gradient-text text-[24px] md:text-[32px] lg:text-[40px] leading-[150%] font-semibold mb-8 md:mb-12 lg:mb-8 text-center ">
        {t("AboutPhilosophy.title")}
      </h2>
      <p className="relative text-neutral-bright-beginning text-[14px] md:text-[16px] lg:text-[22px] leading-[150%] font-medium md:w-[553px] lg:w-[790px] text-center mb-[159px] md:mb-[184px] lg:mb-[281px]">
        {t("AboutPhilosophy.description1")}
      </p>
      <div className="absolute left-0 right-0 flex justify-center pointer-events-none top-[880px] md:top-[920px] lg:top-[1600px] top-1/2 -translate-y-1/2">
        <Image
          src="/icons/about_company_frame.svg"
          alt="Frame"
          width={1439}
          height={153}
          className="object-contain w-full"
          priority
        />
      </div>
      <p className="text-neutral-bright-beginning text-[14px] md:text-[16px] lg:text-[22px] leading-[150%] font-medium lg:w-[780px] text-center mb-8 md:mb-12 lg:mb-20">
        {t("AboutPhilosophy.description2")}
      </p>
      <p className="text-neutral-bright-beginning text-[18px] md:text-[20px] lg:text-[22px] leading-[150%] font-medium md:font-semibold lg:font-medium md:w-[650px]  lg:w-[770px] text-center mb-19.5 md:mb-20 lg:mb-24">
        {t("AboutPhilosophy.description3")}
      </p>

      <div className="w-full px-4 md:px-8 lg:px-0">
        <Image
          src="/images/about/about_philosophy.png"
          alt="Philosophy illustration"
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
      <h2 className="gradient-text text-[24px] md:text-[32px] lg:text-[40px] leading-[150%] font-semibold mb-8 md:mb-12 lg:mb-8 text-center mt-[21] md:mt-[19] lg:mt-10">
        {t("AboutPhilosophy.title2")}
      </h2>
      <p className=" text-neutral-bright-beginning text-[14px] md:text-[16px] lg:text-[18px] leading-[150%]  md:w-[553px] lg:w-[790px] text-center mb-[159px] md:mb-[184px] lg:mb-[134px]"></p>
    </section>
  );
};
