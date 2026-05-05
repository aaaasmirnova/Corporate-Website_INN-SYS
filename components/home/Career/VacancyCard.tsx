import { Vacancy } from "./data";

interface VacancyCardProps {
  info: Vacancy;
}

export const VacancyCard = ({ info }: VacancyCardProps) => {
  return (
    <div
      className=" bg-surface-1 hover:bg-surface-2 active:bg-surface-3 p-8 rounded-[24px] h-full flex flex-col"
      key={info.id}
    >
      <h3 className="text-[18px] md:text-[22px] leading-[150%] mb-3">
        {info.positionDisplay}
      </h3>
      <div className="flex">
        <p className="after:content-['•'] after:mx-2 last:after:content-none text-[14px] md:text-[16px] leading-[150%] text-secondary font-open-sans">
          {info.role}
        </p>
        <p className="after:content-['•'] after:mx-2 last:after:content-none text-[14px] md:text-[16px] leading-[150%] text-secondary font-open-sans">
          {info.location}
        </p>
        <p className="text-[14px] md:text-[16px] leading-[150%] text-secondary font-open-sans">
          {info.contract}
        </p>
      </div>
    </div>
  );
};
