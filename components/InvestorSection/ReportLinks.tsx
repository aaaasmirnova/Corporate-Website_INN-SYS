import { Report } from "./data";
import Download from "@/public/icons/download.svg";

interface ReportLinksProps {
  report: Report;
}

export const ReportLinks = ({ report }: ReportLinksProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-[10px] items-center -mt-10 md:mt-0 lg:gap-4 lg:mt-1">
      <a
        href={report.reportUrl}
        className="flex items-center justify-center gap-2  text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-[12px] py-3 md:py-2 lg:py-2 px-8 md:px-6 text-center whitespace-nowrap w-[297px] md:w-[204px] lg:w-[207px]"
        target="_blank"
        download
      >
        Отчёт за {report.year}
        <Download className="w-4 h-4" />
      </a>
      <a
        href={report.presentationUrl}
        className="flex items-center justify-center gap-2  text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-[12px] py-3 md:py-2 px-8 md:px-6 text-center w-[297px] md:w-[204px] lg:w-[207px]"
        target="_blank"
        download
      >
        IR-презентация
        <Download className="w-4 h-4" />
      </a>
    </div>
  );
};
