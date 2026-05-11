import { useTranslations } from "next-intl";
import { ICard } from "./data";

interface ICardProps {
  info: ICard;
}

export const Card = ({ info }: ICardProps) => {
  const t = useTranslations("Home");

  const Icon = info.icon;
  return (
    <div className="w-[284px] md:w-auto">
      {Icon && <Icon className="w-8 h-8" />}
      <h3 className="text-[18px] md:text-[22px] leading-6 md:leading-8 font-semibold mb-3 mt-3">
        {t(info.title)}
      </h3>
      <p className="text-[14px] md:text-[16px] leading-4 md:leading-6 font-open-sans font-regular text-secondary">
        {t(info.description)}
      </p>
    </div>
  );
};
