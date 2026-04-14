import { ICard } from "./data";
interface ICardProps {
  info: ICard;
}

export const Card = ({ info }: ICardProps) => {
  return (
    <div className="w-[284px] md:w-auto">
      <h3 className="text-h2-desktop mb-3">{info.title}</h3>
      <p className="text-body-desktop text-secondary">{info.description}</p>
    </div>
  );
};
