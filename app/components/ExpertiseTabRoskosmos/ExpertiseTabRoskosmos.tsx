import { useTranslations } from "next-intl";
import Image from "next/image";

export const ExpertiseTabRoskosmos = () => {
  const t = useTranslations("Expertise");

  return (
    <div className="-mx-6 lg:mx-auto">
      <h2 className="max-w-86 mx-auto px-2 text-[18px] font-semibold text-transparent bg-title-gradient bg-clip-text text-center sm:max-w-124 sm:text-2xl lg:max-w-250 lg:text-[40px]">
        {t("info_tab_2.title")}
      </h2>
      <div className="relative flex flex-col pt-31 pb-39.5 sm:pt-20 lg:pt-37.5">
        <Image
          src="/images/expertise/roskosmos-bg-mobile.svg"
          alt="roskosmos"
          fill
          className="w-full h-auto object-contain sm:hidden"
        />
        <Image
          src="/images/expertise/roskosmos-bg-tablet.svg"
          alt="roskosmos"
          fill
          className="hidden w-full h-auto object-contain sm:block lg:hidden"
        />
        <Image
          src="/images/expertise/roskosmos-bg-desktop.svg"
          alt="roskosmos"
          fill
          className="hidden w-full h-auto object-contain rounded-2xl lg:block"
        />
        <div className="relative flex flex-col gap-2 text-white z-10 lg:flex-row lg:flex-wrap">
          <div className="flex flex-col gap-2 lg:max-w-148.5 lg:w-[41%]">
            <div className="w-full px-8 py-8 bg-[rgba(13,12,12,0.4)] rounded-3xl backdrop-blur-[32px] sm:py-10 lg:px-9">
              <h5 className="mb-4 text-[18px] font-medium sm:mb-6 sm:text-2xl sm:font-semibold lg:mb-8 lg:text-[28px]">
                {t("info_tab_2.item_1.title")}
              </h5>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_1.description_1")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_1.description_2")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_1.description_3")}
                </p>
              </div>
            </div>
            <div className="h-full p-8 bg-[rgba(13,12,12,0.4)] rounded-3xl backdrop-blur-[32px] lg:px-9">
              <h5 className="mb-4 text-[18px] font-medium sm:mb-6 sm:text-2xl sm:font-semibold lg:mb-8 lg:text-[28px]">
                {t("info_tab_2.item_3.title")}
              </h5>
              <div className="flex flex-col gap-2 font-open-sans lg:gap-4">
                <p className="text-sm leading-[150%] sm:leading-[200%]">
                  {t("info_tab_2.item_3.description_1")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_3.description_2")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_3.description_3")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_3.description_4")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_3.description_5")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_3.description_6")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:max-w-210 lg:w-[58.125%]">
            <div className="p-8 bg-[rgba(13,12,12,0.4)] rounded-3xl backdrop-blur-[32px] lg:px-9">
              <h5 className="mb-4 text-[18px] font-medium sm:mb-6 sm:text-2xl sm:font-semibold lg:mb-8 lg:text-[28px]">
                {t("info_tab_2.item_2.title")}
              </h5>
              <div className="flex flex-col gap-2 font-open-sans lg:gap-4">
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_2.description_1")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_2.description_2")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_2.description_3")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_2.description_4")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_2.description_5")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_2.description_6")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_2.description_7")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_2.description_8")}
                </p>
              </div>
            </div>
            <div className="w-full p-8 bg-[rgba(13,12,12,0.4)] rounded-3xl backdrop-blur-[32px] lg:px-9">
              <h5 className="mb-4 text-[18px] font-medium sm:mb-6 sm:text-2xl sm:font-semibold lg:mb-8 lg:text-[28px]">
                {t("info_tab_2.item_4.title")}
              </h5>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_4.description_1")}
                </p>
                <p className="text-sm leading-[150%] sm:leading-[200%] sm:text-base">
                  {t("info_tab_2.item_4.description_2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
