import { useTranslations } from "next-intl";
import { Report } from "./data";
import Download from "@/public/icons/download.svg";

interface ReportLinksProps {
  report: Report;
}

export const ReportLinks = ({ report }: ReportLinksProps) => {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-2.5 items-center -mt-10 md:mt-0 lg:gap-4 lg:mt-1">
      <a
        href={report.reportUrl}
        className="flex items-center justify-center gap-2  text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-xl px-8 py-3 text-center whitespace-nowrap w-69.75 md:w-51 font-open-sans"
        target="_blank"
        download
      >
        {t("For_investors.dates.date1.info1")} {report.year}
        <Download className="w-4 h-4" />
      </a>
      <a
        href={report.presentationUrl}
        className="flex items-center justify-center gap-2  text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-xl py-3  px-8  text-center w-69.75 md:w-54.25  font-open-sans"
        target="_blank"
        download
      >
        {t("For_investors.dates.date1.info2")}
        <Download className="w-4 h-4" />
      </a>
    </div>
  );
};
