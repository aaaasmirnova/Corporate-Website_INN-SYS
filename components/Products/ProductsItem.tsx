"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ProductsItem.module.css";

interface ProductsItemProps {
  link: string;
  description: string;
  image: string;
  button: string;
}

export const ProductsItem = ({
  link,
  description,
  image,
  button,
}: ProductsItemProps) => {
  const t = useTranslations("Products");

  const [isTextOpen, setIsTextOpen] = useState(false);

  const toggleText = () => {
    setIsTextOpen((prev) => !prev);
  }

  return (
    <article className={`relative flex flex-col text-white bg-(--color-button-secondary-active) rounded-3xl overflow-hidden hover:bg-(--color-button-secondary-hover) xl:flex-row ${isTextOpen && 'bg-(--color-button-secondary-active)'}`}>
      <div className="relative pt-8 px-6 pb-2 z-10 md:max-w-full md:w-full xl:pb-12.5 md:pt-11.5 md:px-11.5 xl:pt-8 xl:px-12">
        <h3 className="flex items-center justify-between mb-4 text-[24px] font-semibold md:mb-9 xl:mb-8 md:text-[32px] xl:text-[40px]">
          {t(link)}
          <i
            className={`icon-arrow-down text-2xl cursor-pointer ${isTextOpen && styles.icon_less}`}
            onClick={toggleText}
          ></i>
        </h3>
        <p
          className={`mb-7 text-sm leading-[200%] bg-white/0 backdrop-blur overflow-hidden md:text-base ${styles.productItem_text} ${isTextOpen && styles.productItem_text_opened}`}
        >
          {t(description)}
        </p>
        <button className="h-12 px-8.5 bg-accent-5 rounded-xl cursor-pointer hover:bg-(--color-button-secondary-default)">
          {t(button)}
        </button>
      </div>
      <div className="absolute bottom-0 right-0 max-w-120 w-1/2 h-full">
        <Image
          src={image}
          fill
          alt={link}
          className="object-contain object-bottom-right "
          priority
        />
      </div>
    </article>
  );
};
