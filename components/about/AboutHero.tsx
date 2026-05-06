import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="container relative w-full h-[536px] md:h-[602px] lg:h-[1176px] flex flex-col mb-29 md:mb-7.25 lg:mb-13.75">
      {/* <div className="absolute inset-0 w-full h-full "> */}
      <Image
        src="/images/AboutHeroDesktop.png"
        alt="Инноватика Системс"
        fill
        className="object-cover hidden md:block lg:block"
        priority
      />
      <Image
        src="/images/AboutHeroTablet.png"
        alt="Инноватика Системс"
        fill
        className="object-cover block lg:hidden"
        priority
      />

      <div className="relative z-10 flex flex-col  items-center h-full px-4 md:px-8 lg:px-24 mt-[196px] md:mt-[134px] lg:mt-[256px]">
        <p className="text-neutral-bright-beginning text-[13px] md:text-[20px] lg:text-[22px] leading-[150%] mb-2 md:mb-4 font-semibold">
          О компании
        </p>
        <h1 className="gradient-text-hero-about text-[24px] md:text-[44px] lg:text-[64px] leading-[150%] md:leading-[72px] text-center font-semibold">
          Инноватика Системс
        </h1>
      </div>
    </section>
  );
};
