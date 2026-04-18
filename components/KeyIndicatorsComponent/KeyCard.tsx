import { IKeyCard } from "./data";
interface IKeyCardProps {
  info: IKeyCard;
}

export const KeyCard = ({ info }: IKeyCardProps) => {
  const cardClass: string = "p-6 max-w-[400px] flex flex-col gap-2 bg-neutral-bright-beginning-4 backdrop-blur-xs rounded-3xl";

  return (
    <article
      className={cardClass}
      style={{ transform: `translate(${info.desktop.translate.x}, ${info.desktop.translate.y})` }}
    >
      <h3 className="font-heading font-semibold text-h1-desktop text-neutral-bright-beginning">{info.title}</h3>
      <p className="text-body-desktop text-neutral-bright-beginning">{info.description}</p>
    </article>
  );
};
