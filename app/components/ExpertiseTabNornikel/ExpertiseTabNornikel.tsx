import { useTranslations } from "next-intl";
import Image from "next/image";

export const ExpertiseTabNornikel = () => {
  const t = useTranslations("Expertise");

  return (
    <div className="-mx-6 lg:mx-auto">
      <h2 className="max-w-82 mx-auto px-2 text-[18px] font-semibold text-transparent bg-title-gradient bg-clip-text text-center md:max-w-124 md:text-2xl lg:max-w-200 lg:text-[40px]">
        {t("info_tab_1.title")}
      </h2>
      <div className="relative flex flex-col pt-31 pb-39.5 md:pt-20 lg:pt-37.5">
        {/* <Image
          src="/images/expertise/nornikel-bg-mobile.svg"
          alt="nornikel"
          fill
          className="w-full h-auto object-cover md:hidden"
        /> */}
        <Image
          src="/images/expertise/bank-tablet-bg.svg"
          alt="nornikel"
          fill
          className="w-full h-auto object-contain lg:hidden"
        />
        <Image
          src="/images/expertise/bank-bg-desktop.svg"
          alt="nornikel"
          fill
          className="hidden w-full h-auto object-contain rounded-2xl lg:block"
        />
        <div className="relative flex flex-col gap-2 text-white z-10 lg:flex-row lg:flex-wrap">
          <div className="flex flex-col gap-2 lg:max-w-148.5 lg:w-[41%]">
            <div className="w-full px-8 py-8 bg-[rgba(13,12,12,0.4)] rounded-3xl backdrop-blur-[32px] md:py-10 lg:px-9">
              <h5 className="mb-4 text-[18px] font-medium md:mb-6 md:text-2xl md:font-semibold lg:mb-8 lg:text-[28px]">
                {t("info_tab_1.item_1.title")}
              </h5>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_1.description_1")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_1.description_2")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_1.description_3")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_1.description_4")}
                </p>
              </div>
            </div>
            <div className="h-full p-px rounded-3xl bg-[linear-gradient(258.1deg,#26C7FF_-4.47%,#FF4D5D_85.07%,#0F4D81_102.14%)]">
              <div className="flex h-full px-8 py-8 rounded-3xl bg-black md:py-10 lg:px-9">
                <Image
                  src="/images/expertise/cube.png"
                  alt="nornikel"
                  width={400}
                  height={400}
                  className="max-w-full m-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:max-w-210 lg:w-[58.125%]">
            <div className="p-8 bg-[rgba(13,12,12,0.4)] rounded-3xl backdrop-blur-[32px] lg:px-9">
              <h5 className="mb-4 text-[18px] font-medium md:mb-6 md:text-2xl md:font-semibold lg:mb-8 lg:text-[28px]">
                {t("info_tab_1.item_2.title")}
              </h5>
              <div className="flex flex-col gap-2 font-open-sans lg:gap-4">
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_2.description_1")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_2.description_2")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_2.description_3")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_2.description_4")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_2.description_5")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_2.description_6")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_2.description_7")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_2.description_8")}
                </p>
              </div>
            </div>

            <div className="p-8 bg-[rgba(13,12,12,0.4)] rounded-3xl backdrop-blur-[32px] lg:px-9">
              <h5 className="mb-4 text-[18px] font-medium md:mb-6 sm:text-2xl md:font-semibold lg:mb-8 lg:text-[28px]">
                {t("info_tab_1.item_3.title")}
              </h5>
              <div className="flex flex-col gap-2 font-open-sans lg:gap-4">
                <p className="text-sm leading-[150%] md:leading-[200%]">
                  {t("info_tab_1.item_3.description_1")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_3.description_2")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_3.description_3")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_3.description_4")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_3.description_5")}
                </p>
                <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                  {t("info_tab_1.item_3.description_6")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-8 bg-[rgba(13,12,12,0.4)] rounded-3xl backdrop-blur-[32px] lg:px-9">
            <h5 className="mb-4 text-[18px] font-medium md:mb-6 md:text-2xl md:font-semibold lg:mb-8 lg:text-[28px]">
              {t("info_tab_1.item_4.title")}
            </h5>
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                {t("info_tab_1.item_4.description_1")}
              </p>
              <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                {t("info_tab_1.item_4.description_2")}
              </p>
              <p className="text-sm leading-[150%] md:leading-[200%] md:text-base">
                {t("info_tab_1.item_4.description_3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
