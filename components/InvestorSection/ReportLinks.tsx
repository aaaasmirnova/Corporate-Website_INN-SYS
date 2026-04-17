import { Report } from "./data";

interface ReportLinksProps {
  report: Report;
  variant?: "mobile" | "tablet" | "desktop";
}

export const ReportLinks = ({
  report,
  variant = "desktop",
}: ReportLinksProps) => {
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-4 items-center">
        <a
          href={report.reportUrl}
          className="text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-[12px] py-3 px-8 text-center"
          target="_blank"
          download
        >
          Отчёт за {report.year}
        </a>
        <a
          href={report.presentationUrl}
          className="text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-[12px] py-3 px-8 text-center"
          target="_blank"
          download
        >
          IR-презентация
        </a>
      </div>
    );
  }

  if (variant === "tablet") {
    return (
      <div className="flex flex-col gap-2">
        <a
          href={report.reportUrl}
          className="text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-[12px] py-2 px-6 whitespace-nowrap text-center"
          target="_blank"
          download
        >
          Отчёт за {report.year} ↓
        </a>
        <a
          href={report.presentationUrl}
          className="text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-[12px] py-2 px-6 whitespace-nowrap text-center"
          target="_blank"
          download
        >
          IR-презентация ↓
        </a>
      </div>
    );
  }

  // desktop
  return (
    <div className="flex flex-row gap-4">
      <a
        href={report.reportUrl}
        className="text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-[12px] py-2 px-6 whitespace-nowrap text-center  width-[204px]"
        target="_blank"
        download
      >
        Отчёт за {report.year} ↓
      </a>
      <a
        href={report.presentationUrl}
        className="text-[16px] leading-[150%] bg-surface-3 hover:bg-surface-2 active:bg-button-secondary-active rounded-[12px] py-2 px-6 whitespace-nowrap text-center  width-[204px]"
        target="_blank"
        download
      >
        IR-презентация ↓
      </a>
    </div>
  );
};
