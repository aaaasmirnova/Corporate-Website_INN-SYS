import Image from "next/image";
import { Button } from "../../UI/Button";

export const Contacts = () => {
  return (
    <section className="text-white bg-neutral-black-elbrus w-full relative md:min-h-[776px]">
      <div className="text-center w-full">
        <h3 className="text-[24px] md:text-[32px]  lg:text-[40px]  leading-[150%] mb-12 md:mb-24 text-center font-heading font-semibold gradient-text">
          Контакты
        </h3>
      </div>

      <div className="flex justify-center md:justify-start">
        <div className="flex flex-col w-[348px] md:mt-[200px]  font-heading">
          <span className="text-neutral-bright-beginning font-medium text-[16px] lg:text-[18px]  leading-5 lg:leading-6">
            Кабардино-Балкарская Республика,
          </span>
          <span className="text-neutral-bright-beginning font-medium mb-6 lg:mb-8 text-[16px] lg:text-[18px]  leading-5 lg:leading-6">
            ул. Ленина 32А, г. Нальчик
          </span>
          <a
            href="mailto:innovaticasystems@inbox.ru"
            className="text-brand-400 hover:text-link-hover active:text-link-active mb-2 text-[16px] lg:text-[18px]  leading-5 lg:leading-6"
          >
            innovaticasystems@inbox.ru
          </a>
          <a
            href="mailto:systemsinnovatica@gmail.com"
            className="text-neutral-200 hover:text-link-hover active:text-link-active mb-8 text-[16px] lg:text-[18px]  leading-5 lg:leading-6"
          >
            systemsinnovatica@gmail.com
          </a>
          <div className="flex flex-col items-center md:items-start">
            <Button customClassName="bg-neutral-bright-beginning hover:bg-button-primary-hover active:bg-neutral-300 text-[16px] leading-6 text-neutral-black-elbrus px-6 rounded-[12px] py-3 w-[197px] mb-6 font-open-sans">
              Обсудить проект
            </Button>
            <a className="w-49.25 text-center hover:text-link-hover active:text-link-active text-[13px] md:text-[14px] lg:text-[16px] leading-5 font-semibold font-heading">
              Наши ресурсы
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block  absolute left-68 top-0 w-353 max-w-none z-0 pointer-events-none">
        <div className="mx-auto">
          <Image
            src="/images/map.svg"
            alt="Карта"
            width={1412}
            height={776}
            className="w-full h-auto mx-auto max-w-353"
          />

          <div className="absolute w-3 h-3 rounded-full bg-brand-400 top-153 left-15 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_4px_rgba(38,199,255,0.3)] animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
