import { ReportLinks } from "./ReportLinks";
import { Report } from "./data";
import ArrowLeft from "@/public/icons/arrow-left.svg";

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
      <div className="flex items-center justify-center">
        <div className="relative w-full flex justify-center">
          <button
            className="absolute left-0 top-10 -translate-x-3 bg-button-secondary-active z-10 w-6 h-6 rounded-[50%] flex items-center justify-center"
            onClick={showNextYear}
          >
            <ArrowLeft className="w-3.5 h-3 text-surface-3" />
          </button>

          <div className="text-center mx-12">
            <div className="h-28.5 flex items-start justify-center">
              <div className="text-year-report text-[96px] leading-[104%]">
                {currentReport.year}
              </div>
            </div>

            <ReportLinks report={currentReport} />
          </div>
        </div>
      </div>
    </div>
  );
};
