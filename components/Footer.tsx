import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="text-white">
      {/* Верхняя часть с навигацией - радиальный градиент */}
      <div className="nav-glow pt-12 pb-8">
        <div className="mx-auto">
          {/* Верхнее меню */}
          <div className="mb-8">
            <ul className="flex flex-wrap gap-20 justify-center mb-24">
              <li>
                <a className="text-[16px] hover:text-accent-2 transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a className="text-[16px] hover:text-accent-2 transition-colors">
                  Продукты
                </a>
              </li>
              <li>
                <a className="text-[16px] hover:text-accent-2 transition-colors">
                  Экспертиза
                </a>
              </li>
              <li>
                <a className="text-[16px] hover:text-accent-2 transition-colors">
                  Инвесторам
                </a>
              </li>
              <li>
                <a className="text-[16px] hover:text-accent-2 transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a className="text-[16px] hover:text-accent-2 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Нижняя часть с контактами - чёрный фон */}
      <div className="bg-neutral-black-elbrus pt-8 pb-8">
        <div className="mx-auto">
          <div className="mb-24">
            <address className="flex justify-between not-italic">
              <p className="text-18px leading-[150%] text-neutral-200 font-heading w-[317px]">
                РФ, Кабардино-Балкарская&nbsp;Республика,
                <br />
                г.&nbsp;Нальчик, ул.&nbsp;Ленина, 32А
              </p>
              <Image
                src="/icons/Logo.svg"
                alt="Логотип"
                width={40}
                height={53}
              />
              <div className="space-y-1 text-right">
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
            <div className="flex flex-wrap justify-between gap-4 md:gap-6">
              <a className="text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active">
                Политика конфиденциальности
              </a>
              <a className="text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active">
                Пользовательское соглашение
              </a>
              <a className="text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active">
                Политика обработки и защиты&nbsp;персональных данных
              </a>
            </div>
            <div className="text-[12px] text-neutral-200 mt-4">
              © Innovatica Systems 2026
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
