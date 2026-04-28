import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative  bg-neutral-black-elbrus w-full h-[536px] md:h-[602px] lg:h-[1176px] flex flex-col ">
      <div className="absolute inset-0 w-full h-full">
        <picture className="block w-full h-full">
          <source
            media="(max-width: 767px)"
            srcSet="/images/AboutHeroMobile.png"
            className="w-full h-full object-cover"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/images/AboutHeroTablet.png"
            className="w-full h-full object-cover"
          />
          <Image
            src="/images/AboutHeroDesktop.png"
            alt="Инноватика Systems"
            width={1440}
            height={1176}
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
          />
        </picture>
      </div>
      <div className="relative z-10 flex flex-col  items-center h-full px-4 md:px-8 lg:px-24 mt-[196px] md:mt-[134px] lg:mt-[256px]">
        <p className="text-neutral-bright-beginning text-[13px] md:text-[20px] lg:text-[22px] leading-[150%] mb-2 md:mb-4">
          О компании
        </p>
        <h1 className="gradient-text-hero-about text-[24px] md:text-[44px] lg:text-[64px] leading-[150%] md:leading-[72px] font-heading text-center">
          Инноватика Systems
        </h1>
      </div>
    </section>
  );
};
