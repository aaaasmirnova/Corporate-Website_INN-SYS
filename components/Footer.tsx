import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-primary-1 text-white">
      <div className="px-4 py-8 xl:py-[49px] xl:px-5">
        <div className="xl:max-w-[1440px] xl:mx-auto">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start">
            <div>
              <div className="font-logo text-accent-2">ИННОВАТИКА</div>
              <div className="font-logo text-accent-3">SYSTEMS</div>
            </div>

            <div className="">
              <div className="font-open-sans text-body-mobile xl:text-body-desktop">
                +7 999 666-00-58
              </div>
              <div className="font-open-sans text-body-mobile xl:text-body-desktop">
                innovaticasystems@inbox.ru
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-5">
            <div>
              <h3 className="font-heading text-h3-mobile xl:text-h3-desktop text-accent-2">
                Продукты
              </h3>
              <ul className="">
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Продукт 1
                </li>
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Продукт 2
                </li>
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Продукт 3
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-h3-mobile xl:text-h3-desktop text-accent-2">
                Компания
              </h3>
              <ul className="">
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  О нас
                </li>
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Команда
                </li>
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Партнеры
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-h3-mobile xl:text-h3-desktop text-accent-2">
                Экспертиза
              </h3>
              <ul className="">
                <li className="font-open-sans text-body-mobile xl:text-body-desktopr">
                  Решения
                </li>
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Методология
                </li>
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Награды
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-h3-mobile xl:text-h3-desktop text-accent-2">
                Карьера
              </h3>
              <ul className="">
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Вакансии
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-h3-mobile xl:text-h3-desktop text-accent-2">
                Инвесторам
              </h3>
              <ul className="space-y-1 xl:space-y-2">
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Документация
                </li>
                <li className="font-open-sans text-body-mobile xl:text-body-desktop">
                  Отчетность
                </li>
              </ul>
            </div>
          </div>

          <div className="font-open-sans text-body-mobile xl:text-body-desktop">
            Россия, Нальчик, площадь 400-летия
          </div>

          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
            <div className="flex flex-col xl:flex-row xl:gap-6 space-y-1 xl:space-y-0">
              <span className="font-open-sans text-body-mobile hover:text-accent-3">
                Политика конфиденциальности
              </span>
              <span className="font-open-sans text-body-mobile hover:text-accent-3">
                Пользовательское соглашение
              </span>
              <span className="font-open-sans text-body-mobile hover:text-accent-3">
                Политика обработки персональных данных
              </span>
            </div>

            <div className="font-open-sans text-body-mobile">
              ©2026 ООО «Инноватика systems». Все права защищены.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
