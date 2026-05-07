import React from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  "О компании",
  "Продукты",
  "Экспертиза",
  "Инвесторам",
  "Карьера",
  "Контакты",
];
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container text-white relative">
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 928"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-auto"
          preserveAspectRatio="none"
          style={{
            transform: "translateY(-290px)",
            minHeight: "500px",
          }}
        >
          <rect
            width="1440"
            height="928"
            fill="url(#paint0_radial_2969_5817)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2969_5817"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 986) rotate(-90) scale(986 1530)"
            >
              <stop stopColor="#03496A" />
              <stop offset="0.48" stopColor="#1A191A" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="nav-glow pt-12 relative z-10">
        <div className="mx-auto">
          <div className="flex justify-start mb-6 md:hidden">
            <Image src="/icons/Logo.svg" alt="Логотип" width={40} height={53} />
          </div>
          <div className="">
            <ul className="grid grid-cols-2 gap-4 text-left md:flex md:flex-row md:flex-wrap md:gap-9 lg:gap-20 justify-center mb-10">
              {nav.map((elem, index) => (
                <li key={index}>
                  <a className="text-[14px] lg:text-[16px] hover:text-accent-2 transition-colors">
                    {elem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <Image
          src="/icons/gradient_footer_desk_tablet.svg"
          alt="Gradient"
          width={1440}
          height={928}
        /> */}
      </div>

      <div className="bg-neutral-black-elbrus pb-8">
        <div className="mx-auto">
          <div className="">
            <address className="flex flex-col md:flex-row  md:justify-between not-italic pt-10">
              <p className="text-[14px]  md:text-[16px] lg:text-[18px] leading-[150%] text-neutral-200 w-[270px] mb-[22px] ">
                <span className="inline md:hidden">
                  РФ, Кабардино-Балкарская Республика,
                  <br />
                  ул. Ленина 32А, г. Нальчик
                </span>

                <span className="hidden md:inline">
                  РФ, Кабардино-Балкарская
                  <br />
                  Республика, г. Нальчик,
                  <br />
                  ул. Ленина, 32А
                </span>
              </p>
              <div className="hidden md:block">
                <Image
                  src="/icons/Logo.svg"
                  alt="Логотип"
                  width={40}
                  height={53}
                />
              </div>
              <div className="flex flex-col gap-[23px] md:gap-[5px] space-y-1 text-left md:text-right mb-11.75 md:mb-24">
                <a
                  href="mailto:innovaticasystems@inbox.ru"
                  className="block text-[14px]  md:text-[16px] lg:text-[18px] text-brand-400 hover:text-link-hover active:text-link-active"
                >
                  innovaticasystems@inbox.ru
                </a>
                <a
                  href="mailto:systemsinnovatica@gmail.com"
                  className="block text-[14px]  md:text-[16px] lg:text-[18px] text-neutral-200 hover:text-link-hover active:text-link-active"
                >
                  systemsinnovatica@gmail.com
                </a>
              </div>
            </address>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 md:gap-6">
              <a className="text-[10px] md:text-[11px] lg:text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active font-open-sans">
                Политика конфиденциальности
              </a>
              <a className="text-[10px] md:text-[11px] lg:text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active font-open-sans">
                Пользовательское соглашение
              </a>
              <a className="text-[10px] md:text-[11px] lg:text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active mb-[45px] md:mb-0 font-open-sans md:text-center">
                Политика обработки и защиты
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                персональных данных
              </a>
            </div>
            <div className="text-[10px] md:text-[11px] lg:text-[12px] text-neutral-200 mt-4">
              © Инноватика Системс {currentYear}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
