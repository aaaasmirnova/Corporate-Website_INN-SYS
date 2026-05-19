import { useTranslations } from "next-intl";
export const ExpertiseTabBankItem2 = () => {
  const t = useTranslations("Expertise");
  return (
    <div className="bg-[rgba(13,12,12,0.4)] hover:bg-[rgba(13,12,12,0.7)] backdrop-blur-[32px]  rounded-3xl px-8 py-8 md:py-10 lg:pl-30">
      <h3 className="text-white text-[18px] font-medium  md:text-2xl md:font-semibold lg:text-[28px] mb-4 md:mb-6 lg:mb-8">
        {t("info_tab_3.item_2.title")}
      </h3>
      <div className="flex flex-col gap-2 lg:gap-2.5">
        <p className="text-neutral-bright-beginning text-sm leading-[150%] md:leading-[200%] md:text-base font-open-sans">
          {t("info_tab_3.item_2.description_1")}
        </p>
        <p className="text-neutral-bright-beginning text-sm leading-[150%] md:leading-[200%] md:text-base font-open-sans">
          {t("info_tab_3.item_2.description_2")}
        </p>
        <p className="text-neutral-bright-beginning text-sm leading-[150%] md:leading-[200%] md:text-base font-open-sans">
          {t("info_tab_3.item_2.description_3")}
        </p>
        <p className="text-neutral-bright-beginning text-sm leading-[150%] md:leading-[200%] md:text-base font-open-sans">
          {t("info_tab_3.item_2.description_4")}
        </p>
        <p className="text-neutral-bright-beginning text-sm leading-[150%] md:leading-[200%] md:text-base font-open-sans">
          {t("info_tab_3.item_2.description_5")}
        </p>
      </div>
    </div>
  );
};
