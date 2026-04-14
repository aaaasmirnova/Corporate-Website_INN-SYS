import { ReportLinks } from "./ReportLinks";
import { Report } from "./data";

interface DesktopReportProps {
  info: Report[];
}

export const DesktopReport = ({ info }: DesktopReportProps) => {
  return (
    <div className="hidden lg:flex flex-row gap-12 overflow-x-auto hide-scroll pb-4">
      {info.map((report) => (
        <div
          key={report.year}
          className="flex flex-col items-center gap-4 flex-shrink-0"
        >
          <div className="text-center">
            <div className="h-[114px] flex items-start justify-center">
              <div className="font-heading text-year">{report.year}</div>
            </div>

            <ReportLinks report={report} variant="desktop" />
          </div>
        </div>
      ))}
    </div>
  );
};
