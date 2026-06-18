import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./AboutInfo.module.css";

export const AboutInfo = () => {
  const t = useTranslations("About");

  const infoData = [
    {
      id: 1,
      number: "2023",
      title: "Info.title_1",
      image: (
        <Image
          src="/images/about/about-info-border-1.png"
          width={35}
          height={368}
          className="hidden max-w-4.75 object-contain md:block lg:max-w-8.5"
          priority
          alt={t("Info.title_1")}
        />
      ),
    },
    {
      id: 2,
      number: "20+",
      title: "Info.title_2",
      image: (
        <Image
          src="/images/about/about-info-border-2.png"
          width={76}
          height={640}
          className="hidden max-w-9 object-contain md:block lg:max-w-19.5"
          priority
          alt={t("Info.title_2")}
        />
      ),
    },
    {
      id: 3,
      number: "100+",
      title: "Info.title_3",
      image: (
        <Image
          src="/images/about/about-info-border-3.png"
          width={98}
          height={467}
          className="hidden max-w-12.5 object-contain md:block lg:max-w-24"
          priority
          alt={t("Info.title_3")}
        />
      ),
    },
    {
      id: 4,
      number: "20+",
      title: "Info.title_4",
    },
  ];

  return (
    <section
      className={`container flex flex-col gap-y-8 mb-24 md:flex-row md:flex-nowrap md:mx-auto md:gap-x-11.5 md:mb-0 md:overflow-auto ${styles[`about_info`]}`}
    >
      {infoData.map((item) => (
        <div
          key={item.id}
          className="realtive text-center md:flex md:items-center md:gap-x-11.5 md:flex-1"
        >
          <div>
            <h4 className="mb-2 px-2 text-[80px] italic leading-26 font-extrabold text-transparent bg-title-gradient bg-clip-text md:text-[60px] md:mb-4 lg:text-[80px]">
              {item.number}
            </h4>
            <h5 className="text-[#807E7E]">{t(item.title)}</h5>
          </div>
          {item.image && item.image}
        </div>
      ))}
    </section>
  );
};
