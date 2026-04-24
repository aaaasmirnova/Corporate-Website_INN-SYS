import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative  bg-neutral-black-elbrus w-full h-[1176px] flex flex-col">
      <Image
        src="/images/AboutHero.png"
        alt="Инноватика Systems"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="relative z-10 flex flex-col  items-center h-full px-4 md:px-8 lg:px-24">
        <p className="text-neutral-bright-beginning text-[13px] md:text-[20px] lg:text-[22px] leading-[150%] mb-2 md:mb-4">
          О компании
        </p>
        <h1 className="gradient-text-hero-about text-[24px] md:text-[44px] lg:text-[64px] leading-[72px] font-heading">
          Инноватика Systems
        </h1>
      </div>
    </section>
  );
};
