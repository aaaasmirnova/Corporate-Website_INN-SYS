import { useTranslations } from "next-intl";
import Image from "next/image";

interface ProductsItemProps {
  link: string;
  description: string;
  image: string;
}

export const ProductsItem = ({
  link,
  description,
  image,
}: ProductsItemProps) => {
  const t = useTranslations("Products");

  return (
    <article className="flex flex-col text-white bg-(--color-button-secondary-active) rounded-3xl overflow-hidden hover:bg-(--color-button-secondary-hover) xl:flex-row">
      <div className="pt-8 px-6 pb-2 md:max-w-full md:w-full xl:max-w-155.25 xl:w-[51.75%] xl:pb-12.5 md:pt-11.5 md:px-11.5 xl:pt-8 xl:pl-12 xl:pr-0">
        <h3 className="flex items-center mb-4 text-[24px] font-semibold md:mb-9 xl:mb-8 md:text-[32px] xl:text-[40px]">
          {t(link)}
          <i className="icon-arrow-right text-xs ml-4"></i>
        </h3>
        <p className="text-sm leading-[150%] md:text-base">{t(description)}</p>
      </div>
      <div className="relative w-full h-44 mt-auto xl:w-[55%] sm:h-49 xl:h-76.5">
        <Image
          src={image}
          alt={link}
          fill
          className="object-cover object-right sm:object-contain xl:object-contain xl:object-bottom"
          priority
        />
      </div>
    </article>
  );
};
