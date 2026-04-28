import AG from "@/public/icons/ag.svg";
import Gazprombank from "@/public/icons/gazprombank.svg";
import MFTI from "@/public/icons/mfti.svg";
import KBGU from "@/public/icons/kbgu.svg";
import KBR from "@/public/icons/kbr.svg";
import Roskosmos from "@/public/icons/roskosmos.svg";
import LogoPartners from "@/public/icons/partnersLogo.svg";
import GradientPartners from "@/public/icons/gradient_partners_desk_tablet.svg";

const partnersIcon = [AG, Gazprombank, MFTI, KBGU, KBR, Roskosmos];
export const Partners = () => {
  return (
    <section className="container mb-20 md:mb-41 lg:mb-50">
      <div className="text-center w-full  md:hidden">
        <h2 className="text-[24px] leading-[150%] text-center font-heading font-semibold mb-11  gradient-text inline-block">
          Наши партнеры
        </h2>
      </div>
      <div className="md:flex md:justify-between md:items-start md:gap-8 lg:gap-10">
        <div className="relative  md:max-w-[45%] lg:max-w-[50%] overflow-visible">
          <div
            className="hidden md:block lg:absolute lg:-left-[70px] lg:top-0  w-[clamp(540px,60vw,858px)] 
            h-[clamp(597px,66vh,949px)]"
          >
            <LogoPartners className="w-full h-full" />
          </div>
          <div className="hidden md:block text-left md:-mt-55 lg:mt-145">
            <h3 className="text-[80px] lg:text-[115px] leading-[100%] font-heading font-semibold gradient-text whitespace-pre-line text-left  block  md:opacity-40">
              Наши
              <br />
              партнеры
            </h3>
          </div>
        </div>

        <div className="overflow-x-auto hide-scroll md:overflow-x-visible pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:mt-20 lg:mt-24 md:relative lg:ml-[100px] ">
          <div className="md:absolute md:top-0 md:left-0 md:right-0 md:h-16 md:bg-gradient-to-b md:from-[#0D0C0C] md:to-transparent md:z-10 md:pointer-events-none" />
          <div className="flex md:flex-col gap-8 md:gap-12 lg:gap-16 min-w-max md:min-w-0 md:justify-start items-center md:h-[501px] lg:h-[735px] md:overflow-y-auto hide-scroll-vertical">
            {partnersIcon.map((Partner, index) => (
              <div
                key={index}
                className="h-[64px] md:h-[80px] lg:h-[128px] flex-shrink-0"
              >
                <Partner className="h-full w-auto object-contain transition-all hover:neutral-bright-beginning hover:invert" />
              </div>
            ))}
          </div>
          <div className="md:absolute md:bottom-0 md:left-0 md:right-0 md:h-24 md:bg-gradient-to-t md:from-[#0D0C0C] md:to-transparent md:z-10 md:pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
