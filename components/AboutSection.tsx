import React from "react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col content-center items-center gap-[32px] py-[232px] bg-black"
    >
      <p className="max-w-[643px] text-white text-center font-paragraph text-[22px]">Технологическая компания, которая помогает государственным и корпоративным организациям превращать данные в инструмент управления</p>
      <p className="max-w-[643px] text-white text-center font-paragraph text-[22px]">Мы разрабатываем системы анализа, прогнозирования и защиты данных, которые позволяют видеть закономерности, выявлять риски заранее и принимать решения на основе объективной аналитики</p>
    </section>
  );
};