import { useTranslations } from "next-intl";
import Image from "next/image";
import Support from "@/public/icons/career/support.svg";
import ArrowLeftRight from "@/public/icons/arrow-left-right.svg";
import ArrowUp from "@/public/icons/arrow-up.svg";
import Condition from "@/public/icons/career/conditions.svg";

const advantages = [
  {
    title: "CareerAdvantages.advantage1.title",
    description: "CareerAdvantages.advantage1.description",
    position:
      "md:top-[30px] md:left-[190px] lg:top-[130px] lg:-left-[120px] md:-translate-x-10 lg:translate-x-0",
    width: "max-w-[294px]",
    icon: Support,
  },
  {
    title: "CareerAdvantages.advantage2.title",
    description: "CareerAdvantages.advantage2.description",
    position:
      "md:top-[250px] md:-left-[70px] lg:top-[590px] lg:-left-[150px] transform -translate-x-1/2 -translate-y-1/2",
    width: "max-w-[294px]",
    icon: ArrowLeftRight,
  },
  {
    title: "CareerAdvantages.advantage3.title",
    description: "CareerAdvantages.advantage3.description",
    position:
      "md:top-[370px] md:left-[230px] lg:top-[450px] lg:left-[410px] md:translate-x-10 lg:translate-x-0",
    width: "max-w-[294px]",
    icon: ArrowUp,
  },
  {
    title: "CareerAdvantages.advantage4.title",
    description: "CareerAdvantages.advantage4.description",
    position:
      "md:bottom-[60px] md:left-[100px] lg:bottom-[70px] lg:left-[210px] transform -translate-x-1/2",
    width: "max-w-[355px]",
    icon: Condition,
  },
];

const circles = [
  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1220px] h-[1220px] md:w-[610px]  md:h-[610px] lg:w-[916px] lg:h-[916px] opacity-10 ",
  "absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[764px] h-[764px] md:w-[382px]  md:h-[382px]  lg:w-[686px] lg:h-[686px] opacity-20",
  "absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[458px] h-[458px] md:w-[229px]  md:h-[229px] lg:w-[430px] lg:h-[430px] opacity-30",
  "absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[152px] h-[152px] md:w-[76px]  md:h-[76px] lg:w-[172px] lg:h-[172px] opacity-40",
];

export const CareerAdvantages = () => {
  const t = useTranslations();

  return (
    <section className="relative min-h-[579px]  md:min-h-[654px] lg:min-h-[1007px] mb-24.75 md:mb-54.75 lg:mb-50">
      <div className="">
        {circles.map((circle, index) => (
          <div
            className={`${circle}  text-brand-400 border  rounded-[50%] hidden md:block`}
            key={index}
          ></div>
        ))}
      </div>
      {/* <div className="w-full">
        <Image
          src="/images/ellipses.png"
          fill
          alt="ff"
          className="block md:hidden object-cover"
        />
      </div> */}
      <div className="flex flex-col gap-13 items-center justify-center w-[355px]">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`flex flex-col items-center absolute ${advantage.position} ${advantage.width} w-full`}
          >
            <advantage.icon className=" text-brand-400 mb-3" />
            <h3 className="text-neutral-0 text-[16px] md:text-[20px] lg:text-[22px] leading-[150%] text-center mb-2 md:mb-3 font-semibold max-w-[355px]">
              {t(advantage.title)}
            </h3>
            <p className="text-text-secondary text-[14px]  md:text-[16px] leading-[150%]  text-center">
              {" "}
              {t(advantage.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
