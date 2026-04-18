import React from "react";
import bgImage from "@/public/assets/png/key-picture.png";
import { cards } from "./data";
import { KeyCard } from "./KeyCard";

export const KeyIndicatorsSection = () => {
  const divClass = "my-16 grid grid-cols-2 grid-rows-2 gap-50 bg-[url(../public/assets/png/key-picture.png)] bg-hero bg-no-repeat bg-center";

  // className="my-16 grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 grid-rows-4 md:grid-rows-5 xl:grid-rows-6 place-content-center place-items-center gap-5 bg-[url(../public/assets/png/key-picture.png)] bg-hero bg-no-repeat bg-center"
  return (
    <section
      id="key-indicators"
      className="w-full flex flex-col items-center px-16 bg-neutral-black-elbrus"
      style={{ backgroundImage: `url(${bgImage})`}}
    >
      <h1 className="font-heading font-semibold bg-radial from-neutral-bright-beginning to-neutral-grey-300 bg-clip-text text-transparent text-[40px]">Ключевые показатели</h1>
      <div className={divClass}>
        {cards.map((card, index) => (
          <KeyCard info={card} key={index} />
        ))}
      </div>
    </section>
  );
};
