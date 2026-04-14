import { Statistic } from "./data";

interface StatisticsProps {
  info: Statistic[];
}
export const Statistics = ({ info }: StatisticsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 md:gap-y-10 mb-16 justify-items-center">
      {info.map((param, index) => (
        <div
          className="flex flex-col items-center w-[188px] xl:w-[220px] 2xl:w-[280px] gap-3"
          key={index}
        >
          <p className="text-mega-desktop font-heading">{param.percent}</p>
          <p className="text-percent-description text-center">{param.name}</p>
        </div>
      ))}
    </div>
  );
};
