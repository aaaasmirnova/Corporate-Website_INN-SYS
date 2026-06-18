import { useTranslations } from "next-intl";

interface ContactItem {
  id: number;
  title: string;
  link: string;
  info?: string;
}

export interface ContactInformationProps {
  title: string;
  data: ContactItem[];
}

export default function ContactInformation({
  title,
  data,
}: ContactInformationProps) {
  const t = useTranslations("Contact");

  return (
    <section className="mb-16 sm:mb-35 lg:mb-35.5">
      <h2 className="mb-16 text-2xl font-semibold text-transparent bg-clip-text bg-title-gradient text-center sm:mb-25 sm:text-[32px] lg:mb-35.5 lg:text-[40px]">
        {t(title)}
      </h2>
      <div className="flex flex-col items-center gap-16 sm:gap-28 lg:gap-32">
        {data.map((item) => (
          <div key={item.id}>
            <h4 className="text-[56px] font-extrabold leading-10 font-italic text-italic bg-clip-text bg-gradient-surface text-transparent text-center sm:text-[120px] sm:leading-34 lg:text-[150px]">
              {item.id === 1 ? t(item.title) : item.title}
            </h4>
            <a
              href={item.link}
              className="relative flex items-center justify-center gap-2 w-64 h-12 mx-auto px-8 text-white bg-[#383737] rounded-xl hover:bg-white hover:text-[#0D0C0C] sm:-top-3"
              target="_blank"
            >
              {item.id === 1 ? t(item.title) : item.title}
              <i className="icon-arrow-right -rotate-90"></i>
            </a>
            {item.info && (
              <p className="max-w-64 mt-4 text-[10px] leading-[150%] text-center sm:max-w-full sm:mt-3 sm:text-xs lg:mt-4">
                {item.info}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
