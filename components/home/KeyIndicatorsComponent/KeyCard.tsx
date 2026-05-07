import { IKeyCard } from "./data";
interface IKeyCardProps {
  info: IKeyCard;
}

export const KeyCard = ({ info }: IKeyCardProps) => {
  const cardClass: string = "p-6 max-w-82 md:max-w-100 flex flex-col gap-2 bg-neutral-bright-beginning-4 backdrop-blur-xs rounded-3xl " +
  `card-${info.id}`;

  return (
    <article
      className={cardClass}
    >
      <h3 className="font-heading font-semibold text-[24px] xl:text-h1-desktop text-neutral-bright-beginning">{info.title}</h3>
      <p className="text-[14px] xl:text-body-desktop text-neutral-bright-beginning">{info.description}</p>
    </article>
  );
};
