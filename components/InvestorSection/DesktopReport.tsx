import { ReportLinks } from "./ReportLinks";
import { Report } from "./data";

interface DesktopReportProps {
  info: Report[];
}

export const DesktopReport = ({ info }: DesktopReportProps) => {
  const isTwoYears = info.length === 2;
  return (
    <div
      className={`hidden lg:flex ${
        isTwoYears ? "justify-center" : ""
      } gap-12 overflow-x-auto hide-scroll pb-4`}
    >
      {info.map((report) => (
        <div
          key={report.year}
          className="flex flex-col items-center gap-12 flex-shrink-0"
        >
          <div className="text-center">
            <div className="h-[114px] flex items-start justify-start">
              <div className="font-heading text-year-report text-[150px] leading-[104%]">
                {report.year}
              </div>
            </div>

            <ReportLinks report={report} />
          </div>
        </div>
      ))}
    </div>
  );
};
