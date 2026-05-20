import { useTranslations } from "next-intl";

export default function InvestorsFinance() {
  const t = useTranslations("Investors");

  return (
    <section className="flex flex-col gap-y-24 max-w-259 w-full mx-auto pb-24 px-6 sm:flex-row sm:justify-between sm:pb-44 lg:pb-52">
      <div className="flex flex-col items-center sm:items-start sm:max-w-82.5 lg:max-w-110.5">
        <h4 className="mb-8 text-sm leading-[150%] font-medium text-[#F8F7F7] text-center sm:mb-13 sm:text-left lg:mb-8 lg:text-[18px]">
          {t("finance.title")}
        </h4>
        <button className="h-12 px-8 text-[#0D0C0C] bg-[#F8F7F7] rounded-xl">
          {t("finance.button")}
        </button>
      </div>
      <div className="sm:max-w-99 lg:max-w-110">
        <div className="flex justify-center items-center gap-x-2.5 mb-6">
          <div className="py-4 pl-4 pr-8 text-[#807E7E] bg-[#1A191A] border border-transparent rounded-3xl">
            <p className="min-w-23 mb-4 text-2xl leading-[150%] font-semibold sm:text-[32px] lg:text-[40px]">
              123{" "}
              <span className="text-xs lg:text-base">{t("finance.mln")}</span>
            </p>
            <p className="text-xs lg:text-base">2023 {t("finance.year")}</p>
          </div>
          <i className="icon-arrow-down w-6 h-6 text-2xl text-[#6B6969] -rotate-90"></i>
          <div className="py-4 pl-4 pr-8 text-[#F8F7F7] bg-[#292828] border border-[#26C398] rounded-3xl">
            <p className="min-w-23 mb-4 text-2xl leading-[150%] font-semibold sm:text-[32px] lg:text-[40px]">
              238{" "}
              <span className="text-xs lg:text-base">{t("finance.mln")}</span>
            </p>
            <p className="text-xs lg:text-base">2026 {t("finance.year")}</p>
          </div>
        </div>
        <p className="mx-auto font-medium leading-[150%] text-[#F8F7F7] text-center sm:text-[20px] sm:font-semibold sm:max-w-79 lg:text-[22px] lg:max-w-full">
          <span className="text-[#26C398]">+21% </span>
          {t("finance.cagr")}
        </p>
      </div>
    </section>
  );
}
