import React from "react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center py-58 bg-[url(../public/assets/png/bg-hero.png)] bg-hero bg-no-repeat bg-center bg-cover"
    >
      <h1 className="font-heading font-semibold text-white text-[64px]">Инноватика Systems</h1>
      <p className="max-w-160.75 my-16 text-white text-center font-paragraph text-[18px]">Проектируем, внедряем и сопровождаем комплексные ИТ-решения для государственных и корпоративных организаций. Наша задача — сделать данные понятными, процессы — управляемыми, результаты — предсказуемыми</p>
      <button className="cursor-pointer my-16 py-3 px-8 bg-white rounded-xl font-[16px] font-open-sans">Обсудить проект</button>
    </section>
  );
};