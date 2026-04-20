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
    <footer className="text-white">
      {/* Верхняя часть с навигацией - радиальный градиент */}
      <div className="nav-glow pt-12">
        <div className="mx-auto">
          <div className="flex justify-start mb-6 md:hidden">
            <Image src="/icons/Logo.svg" alt="Логотип" width={40} height={53} />
          </div>
          <div className="">
            <ul className="grid grid-cols-2 gap-4 text-left md:flex md:flex-row md:flex-wrap md:gap-9 lg:gap-20 justify-center mb-12 md:mb-24">
              {nav.map((elem, index) => (
                <li key={index}>
                  <a className="text-[16px] hover:text-accent-2 transition-colors">
                    {elem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-neutral-black-elbrus pb-8">
        <div className="mx-auto">
          <div className="">
            <address className="flex flex-col md:flex-row  md:justify-between not-italic">
              <p className="text-18px leading-[150%] text-neutral-200 font-heading w-[317px]">
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
                  className="block text-[18px] text-brand-400 hover:text-link-hover active:text-link-active font-heading"
                >
                  innovaticasystems@inbox.ru
                </a>
                <a
                  href="mailto:systemsinnovatica@gmail.com"
                  className="block text-[18px] text-neutral-200 hover:text-link-hover active:text-link-active font-heading"
                >
                  systemsinnovatica@gmail.com
                </a>
              </div>
            </address>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 md:gap-6">
              <a className="text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active">
                Политика конфиденциальности
              </a>
              <a className="text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active">
                Пользовательское соглашение
              </a>
              <a className="text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active mb-[45px] md:mb-0">
                Политика обработки и защиты
                <span className="hidden md:inline">
                  <br />
                </span>
                <span className="inline md:hidden"> </span>
                персональных данных
              </a>
            </div>
            <div className="text-[12px] text-neutral-200 mt-4">
              © Innovatica Systems {currentYear}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
