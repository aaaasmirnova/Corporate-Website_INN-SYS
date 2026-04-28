import { useTranslations } from "next-intl";
import styles from "./AboutSubstract.module.css";

const substract = [
  {
    id: 1,
    year: "2023",
    title: "Substract.substract1.title",
    description: "Substract.substract1.description",
  },
  {
    id: 2,
    year: "2023",
    title: "Substract.substract2.title",
    description: "Substract.substract2.description",
  },
  {
    id: 3,
    year: "2023",
    title: "Substract.substract3.title",
    description: "Substract.substract3.description",
  },
  {
    id: 4,
    year: "2023",
    title: "Substract.substract4.title",
    description: "Substract.substract4.description",
  },
];

export const AboutSubstract = () => {
  const t = useTranslations("About");

  return (
    <section className="flex flex-col w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw">
      {substract.map((item, index) => (
        <article
          className={`flex max-w-187.5 w-[calc(100%-12px)] md:w-[70%] xl:w-1/2 ${styles[`substract_${index + 1}`]}`}
          key={item.id}
        >
          <div className="max-w-126.5 w-full text-white hover:text-white xl:text-[#807E7E] px-3 md:px-7.5 xl:px-10 ">
            <h5 className="leading-20 font-extrabold italic bg-clip-text bg-linear-to-b from-[#1A191A] to-transparent text-transparent text-8xl md:leading-22 md:text-[120px] xl:text-[150px] xl:leading-26">
              {item.year}
            </h5>
            <h3 className="font-semibold mb-4 md:text-[20px] xl:text-[22px]">
              {t(item.title)}
            </h3>
            <p className="text-sm leading-[150%]">{t(item.description)}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
