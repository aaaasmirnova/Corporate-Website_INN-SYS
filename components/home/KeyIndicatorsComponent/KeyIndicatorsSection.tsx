import React from "react";
import { useTranslations } from "next-intl";
import { cards } from "./data";
import { KeyCard } from "./KeyCard";

export const KeyIndicatorsSection = () => {
  const t = useTranslations("Home");
  
  return (
    <section
      id="key-indicators"
      className="w-full flex flex-col gap-12 items-center pt-16 pb-36 bg-[url(../public/assets/png/key-picture.png)] bg-no-repeat bg-center"
    >
      <h1 className="font-heading font-semibold bg-radial from-neutral-bright-beginning to-neutral-grey-300 bg-clip-text text-transparent text-[24px] md:text-[32px] xl:text-[40px]">{t("key_metrics.title")}</h1>
      <div className="my-16 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-8 md:gap-5 lg:gap-24 xl:gap-50">
        {cards.map((card, index) => (
          <KeyCard info={card} key={index} />
        ))}
      </div>
    </section>
  );
};
