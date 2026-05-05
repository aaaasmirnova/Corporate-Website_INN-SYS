import { ICard } from "./data";

interface ICardProps {
  info: ICard;
}

export const Card = ({ info }: ICardProps) => {
  const Icon = info.icon;
  return (
    <div className="w-[284px] md:w-auto">
      {Icon && <Icon className="w-8 h-8" />}
      <h3 className="text-[18px] md:text-[22px] leading-6 md:leading-8 font-medium mb-3">
        {info.title}
      </h3>
      <p className="text-[14px] md:text-[16px] leading-4 md:leading-6 font-open-sans font-regular text-secondary">
        {info.description}
      </p>
    </div>
  );
};
