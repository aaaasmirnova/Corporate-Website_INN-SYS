import { Vacancy } from "./data";

interface VacancyCardProps {
  info: Vacancy;
}

export const VacancyCard = ({ info }: VacancyCardProps) => {
  return (
    <div
      className=" bg-surface-1 p-8 rounded-[24px] h-full flex flex-col"
      key={info.id}
    >
      <h3 className="text-h2-desktop mb-3">{info.positionDisplay}</h3>
      <div className="flex">
        <p className="after:content-['•'] after:mx-2 last:after:content-none text-body-desktop text-secondary">
          {info.role}
        </p>
        <p className="after:content-['•'] after:mx-2 last:after:content-none text-body-desktop text-secondary">
          {info.location}
        </p>
        <p className="text-body-desktop text-secondary">{info.contract}</p>
      </div>
    </div>
  );
};
