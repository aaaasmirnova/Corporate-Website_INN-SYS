import React from "react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col content-center items-center gap-8 pt-58 pb-36 bg-neutral-black-elbrus"
    >
      <p className="max-w-81.75 md:max-w-122 xl:max-w-132 text-neutral-bright-beginning text-center font-paragraph text-[16px] xl:text-5.5 leading-normal">Технологическая компания, которая помогает государственным и корпоративным организациям превращать данные в инструмент управления</p>
      <p className="max-w-81.75 md:max-w-122 xl:max-w-132 text-neutral-bright-beginning text-center font-paragraph text-[16px] xl:text-5.5 leading-normal">Мы разрабатываем системы анализа, прогнозирования и защиты данных, которые позволяют видеть закономерности, выявлять риски заранее и принимать решения на основе объективной аналитики</p>
    </section>
  );
};
