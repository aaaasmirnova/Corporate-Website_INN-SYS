import { ReportLinks } from "./ReportLinks";
import { Report } from "./data";

interface MobileReportProps {
  currentReport: Report;
  showNextYear: () => void;
}

export const MobileReport = ({
  currentReport,
  showNextYear,
}: MobileReportProps) => {
  return (
    <div className="block md:hidden">
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-black-elbrus-80 rounded-full p-3 z-10"
          onClick={showNextYear}
        >
          здесь будет стрелка ***
        </button>

        <div className="text-center mx-12">
          <div className="h-[114px] flex items-start justify-center">
            <div className="font-heading text-year-report text-[96px] leading-[104%]">
              {currentReport.year}
            </div>
          </div>

          <ReportLinks report={currentReport} variant="mobile" />
        </div>
      </div>
    </div>
  );
};
