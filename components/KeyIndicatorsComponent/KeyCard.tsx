import { IKeyCard } from "./data";
interface IKeyCardProps {
  info: IKeyCard;
}

export const KeyCard = ({ info }: IKeyCardProps) => {
  // const cardClass: string = ` col-start-${info.desktop.col.start}` + // ` col-end-${info.desktop.col.end}` +
  // ` row-start-${info.desktop.row.start}` + // ` col-end-${info.desktop.row.end}` +
  // " col-span-4 row-span-2 p-6 flex flex-col gap-2 bg-neutral-bright-beginning-4 backdrop-blur-xs rounded-3xl";
  // " translate-x-0 translate-y-0" +
  // " md:translate-x-" + info.translateTablet.x + " md:translate-y-" + info.translateTablet.y +
  // " translate-x-" + info.desktop.translate.x + " translate-y-" + info.desktop.translate.y +
  // " row-start-" + info.id + " col-end-" + info.id +
  // " md:col-start-" + info.col.tablet.start + " md:col-end-" + info.col.tablet.end +
  // " md:row-start-" + info.row.tablet.start + " md:col-end-" + info.row.tablet.end +

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
