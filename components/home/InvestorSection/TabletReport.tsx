import { ReportLinks } from "./ReportLinks";
import { Report } from "./data";

interface TabletProps {
  pairedReports: Report[][];
}

export const TabletReport = ({ pairedReports }: TabletProps) => {
  return (
    <div className="hidden md:block lg:hidden overflow-x-auto snap-mandatory snap-x hide-scroll pb-4">
      <div className="flex flex-row">
        {pairedReports.map((pair, pairIndex) => (
          <div
            key={pairIndex}
            className="flex flex-col gap-8 w-full flex-shrink-0 snap-start justify-center items-center"
          >
            {pair.map((report) => (
              <div
                key={report.year}
                className="flex flex-col items-center gap-4"
              >
                <div className="text-center">
                  <div className="h-[114px] flex items-start justify-center">
                    <div className="font-heading text-year-report text-[150px] leading-[104%]">
                      {report.year}
                    </div>
                  </div>

                  <ReportLinks report={report} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
