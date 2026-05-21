import { useTranslations } from "next-intl";
import { NumbersCounter } from "../NumbersCounter/NumbersCounter";

const investors_numbers_data = [
  {
    id: 1,
    value: 32,
    title: "cagr",
    more: "+21%",
    type: "%",
  },
  {
    id: 2,
    value: 96,
    title: "revenue",
    more: "+21%",
    type: "",
  },
  {
    id: 3,
    value: 21,
    title: "ebitda",
    more: "",
    type: "M ₽",
  },
  {
    id: 4,
    value: 22,
    title: "profitability",
    more: "",
    type: "%",
  },
  {
    id: 5,
    value: 54,
    title: "gross_profit",
    more: "",
    type: "M ₽",
  },
  {
    id: 6,
    value: 14,
    title: "free_cash_flow",
    more: "",
    type: "M ₽",
  },
];

export default function InvestorsNumber() {
  const t = useTranslations("InvestorsNumbers");

  return (
    <section className="flex flex-wrap flex-col gap-y-8 max-w-283 mx-auto mb-24 px-6 sm:flex-row sm:gap-2.5 sm:mb-44 lg:gap-6 lg:mb-52">
      {investors_numbers_data.map((item) => (
        <div
          className="relative py-6 px-10 bg-[#1A191A] rounded-4xl sm:py-7 sm:px-6 lg:px-16"
          key={item.id}
        >
          {item.more && (
            <span className="absolute -top-9.5 right-8 py-1.5 px-4 font-open-sans text-xs text-[#0D0C0C] bg-[#26C398] rounded-2xl sm:-top-4">
              {item.more}
            </span>
          )}
          <div className="flex flex-col justify-center items-center mx-auto max-w-58 text-[#F8F7F7] text-center sm:max-w-full">
            <h4 className="mb-4 text-[96px] leading-26 font-bold sm:mb-0 sm:text-[100px] sm:leading-[120%] md:text-[150px] md:leading-37.5 lg:mb-4">
              <NumbersCounter value={item.value} />{item.type}
            </h4>
            <p className="font-semibold leading-[150%] sm:text-[20px] lg:text-[22px]">
              {t(item.title)}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
