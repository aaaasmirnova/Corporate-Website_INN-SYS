import { useTranslations } from "next-intl";
import Image from "next/image";
import { ExpertiseTabBankItem1 } from "./ExpertiseTabBankItem1";
import { ExpertiseTabBankItem2 } from "./ExpertiseTabBankItem2";
import { ExpertiseTabBankItem3 } from "./ExpertiseTabBankItem3";
import { ExpertiseTabBankItem4 } from "./ExpertiseTabBankItem4";
import { ExpertiseTabBankItem5 } from "./ExpertiseTabBankItem5";

export const ExpertiseTabBank = () => {
  const t = useTranslations("Expertise");
  return (
    <div className="">
      <div className="flex flex-col lg:mx-auto ">
        <h2 className="max-w-82 mx-auto px-2 text-[18px] font-semibold gradient-text  text-center md:max-w-124 md:text-2xl lg:max-w-280 lg:text-[40px] mb-31 md:mb-45 lg:mb-37.5">
          {t("info_tab_3.title")}
        </h2>

        <div className="block lg:hidden">
          <div className="relative flex flex-col gap-2 pb-39.5 bg-cover bg-center bg-no-repeat">
            <Image
              src="/images/expertise/bank-tablet-bg.svg"
              alt=""
              fill
              className=" w-full h-auto object-contain  lg:hidden"
            />
            <ExpertiseTabBankItem1 />
            <ExpertiseTabBankItem2 />
            <ExpertiseTabBankItem4 />
            <ExpertiseTabBankItem3 />
            <div className="relative z-10 p-px rounded-3xl bg-[linear-gradient(258.1deg,#26C7FF_-4.47%,#FF4D5D_85.07%,#0F4D81_102.14%)]">
              <div className="px-8 py-8 rounded-3xl bg-black md:py-10 lg:px-9 flex items-center justify-center">
                <Image
                  src="/images/Cube.svg"
                  alt=""
                  width={128}
                  height={128}
                  className="max-w-100 mx-auto object-contain w-81.75 h-81.75"
                />
              </div>
            </div>
            <ExpertiseTabBankItem5 />
          </div>
        </div>
        <div className="hidden lg:block relative ">
          <div className="absolute inset-0">
            <Image
              src="/images/expertise/bank-bg-desktop.svg"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="relative z-10 flex flex-col gap-2 pb-39.5 ">
            <div className="flex  flex-col lg:flex-row gap-2">
              <div className="flex flex-col gap-2 lg:w-[59%]">
                <ExpertiseTabBankItem1 />
                <ExpertiseTabBankItem2 />
              </div>

              <div className="flex flex-col gap-2 lg:w-[41%]">
                <ExpertiseTabBankItem3 />

                <div className="flex-1 relative z-10 p-px rounded-3xl bg-[linear-gradient(258.1deg,#26C7FF_-4.47%,#FF4D5D_85.07%,#0F4D81_102.14%)]">
                  <div className="flex items-center h-full  px-8 py-8 rounded-3xl bg-black md:py-10 lg:px-9">
                    <Image
                      src="/images/Cube.svg"
                      alt=""
                      width={128}
                      height={128}
                      className="max-w-100 mx-auto object-contain w-81.75 h-81.75 md:w-100 md:h-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
              <ExpertiseTabBankItem4 />
              <ExpertiseTabBankItem5 />
            </div>
          </div>
        </div>
      </div>
      //{" "}
    </div>
  );
};
