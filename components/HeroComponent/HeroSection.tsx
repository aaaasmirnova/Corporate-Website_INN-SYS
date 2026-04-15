import React from "react";
import bgImage from "@/public/assets/png/bg-hero.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center py-[232px] bg-[url(../public/assets/png/bg-hero.png)] bg-hero bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})`}}
    >
      <h1 className="font-heading font-semibold text-white text-[64px]">Инноватика Systems</h1>
      <p className="max-w-[643px] my-[64px] text-white text-center font-paragraph text-[18px]">Проектируем, внедряем и сопровождаем комплексные ИТ-решения для государственных и корпоративных организаций. Наша задача — сделать данные понятными, процессы — управляемыми, результаты — предсказуемыми</p>
      <button className="my-[64px] py-[12px] px-[32px] bg-white rounded-xl font-[16px] font-open-sans">Обсудить проект</button>
    </section>
  );
};