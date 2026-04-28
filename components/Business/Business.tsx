import { useTranslations } from "next-intl";
import Image from "next/image";

export const Business = () => {
  const t = useTranslations("Business");

  return (
    <section className="relative flex flex-col max-w-214.5 w-full mx-auto mb-9 md:mb-18.75 xl:mb-24">
      <p className="absolute top-[15%] text-2xl font-semibold text-[#807E7E] text-center md:top-[25%] md:text-[32px] xl:text-[40px]">
        {t("description")}
      </p>
      <div>
        <Image
          src="/images/logos.png"
          alt="business logos"
          width={858}
          height={949}
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
};
