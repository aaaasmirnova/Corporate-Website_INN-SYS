import { useTranslations } from "next-intl";
import { Statistic } from "./data";

interface StatisticsProps {
  info: Statistic[];
}
export const Statistics = ({ info }: StatisticsProps) => {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 md:gap-y-10 mb-16 justify-items-center">
      {info.map((param, index) => (
        <div
          className="flex flex-col items-center w-32 md:w-47 gap-3 group cursor-pointer"
          key={index}
        >
          <p className="text-[24px] md:text-[40px] leading-[150%] font-semibold group-hover:text-brand-400">
            {param.percent}
          </p>
          <p className="text-[14px] md:text-[16px] leading-[150%] text-center font-regular font-open-sans text-neutral-200 group-hover:text-neutral-0">
            {t(param.name)}
          </p>
        </div>
      ))}
    </div>
  );
};
