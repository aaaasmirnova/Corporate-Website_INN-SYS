import Image from "next/image";
// import AG from "@/public/images/partners/ag.png";
// import Gazprombank from "@/public//images/partners/gazprombank.png";
// import MFTI from "@/public//images/partners/mfti.png";
// import KBGU from "@/public//images/partners/kbgu.png";
// import KBR from "@/public//images/partners/kbr.png";
// import Roskosmos from "@/public//images/partners/roskosmos.png";
import { useLocale, useTranslations } from "next-intl";
// import LogoPartners from "@/public/icons/partnersLogo.svg";
// import GradientPartners from "@/public/icons/gradient_partners_desk_tablet.svg";

// const partnersIcon = [AG, Gazprombank, MFTI, KBGU, KBR, Roskosmos];
const partnersIconRu = [
  "/icons/gazprombank.svg",
  "/icons/mfti.svg",
  "/icons/kbgu.svg",
  "/icons/kbr.svg",
  "/icons/roskosmos.svg",
  "/icons/ag.svg",
];

const partnersIconEn = [
  "/icons/gazprombank-eng.svg",
  "/icons/mfti-eng.svg",
  "/icons/kbgu.svg",
  "/icons/kbr.svg",
  "/icons/roskosmos-eng.svg",
  "/icons/ag.svg",
];

export const Partners = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const partnersIcon = locale === "ru" ? partnersIconRu : partnersIconEn;

  return (
    <section className="container mb-20 md:mb-41 lg:mb-30">
      <div className="text-center w-full  md:hidden">
        <h2 className="text-[24px] leading-[150%] text-center font-semibold mb-11  gradient-text inline-block">
          {t("Our_partners")}
        </h2>
      </div>
      <div className="md:flex md:justify-between md:items-start md:gap-8 lg:gap-10 ">
        <div className="relative hidden md:block max-w-214.5 w-[59.58%] lg:h-[949px]">
          <div className="relative h-full md:-ml-8 lg:-ml-20">
            <Image
              src="/images/partnersLogo.png"
              width={540}
              height={597}
              className="md:w-[540px] md:h-[597px] lg:w-[858px] lg:h-[949px]"
              alt="Logo"
            />
          </div>
          <div className="text-left absolute left-0 md:bottom-[40px] lg:bottom-[100px]">
            <h3 className="md:text-[80px] lg:text-[115px] leading-[100%] font-semibold gradient-text whitespace-pre-line text-left block md:opacity-40">
              {t("Our_partners")}
            </h3>
          </div>
        </div>

        <div className="w-full md:w-auto overflow-x-auto md:overflow-x-visible md:relative hide-scroll lg:max-h-[735px] md:mt-20">
          <div className="md:absolute md:top-0 md:left-0 md:right-0 md:h-16 md:bg-gradient-to-b md:from-[#0D0C0C] md:to-transparent md:z-10 md:pointer-events-none" />
          <div className="flex md:flex-col gap-8 md:gap-12 lg:gap-16 min-w-max md:min-w-0 overflow-y-auto hide-scroll-vertical md:h-[501px] lg:h-[735px]">
            {partnersIcon.map((partner, index) => (
              <div
                key={index}
                className=" flex items-center justify-center h-[64px] md:h-[90px] lg:h-[120px]"
              >
                <Image
                  src={partner}
                  width={144}
                  height={64}
                  className="object-contain h-full w-auto max-w-full transition-all hover:neutral-bright-beginning hover:invert "
                  alt="Partner Logo"
                />
              </div>
            ))}
          </div>
          <div className="md:absolute md:bottom-0 md:left-0 md:right-0 md:h-24 md:bg-gradient-to-t md:from-[#0D0C0C] md:to-transparent md:z-10 md:pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
