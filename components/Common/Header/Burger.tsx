"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Burger = () => {
  const t = useTranslations("Home");
  const path = usePathname();
  const locale = useLocale();

  const [isOpen, setOpen] = useState(false);

  const toggleBurger = () => {
    setOpen(!isOpen);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`flex flex-col justify-start items-start w-14 h-14 lg:hidden py-4 bg-neutral-black-elbrus/20 backdrop-blur-xs transition-250ms overflow-clip ${isOpen ? "fixed top-0 right-0 w-93.75 h-svh rounded-none" : "absolute top-0 right-0 rounded-xl"}`}
    >
      <div
        className={`relative ${isOpen ? "px-12 py-8" : "px-0 py-0"} lg:px-8 w-full flex flex-row ${isOpen ? "justify-end items-center" : "justify-center items-center"}`}
      >
        <Link className="uppercase" href="/">
          <Image
            className={`absolute top-5 left-10 opacity-0 transition-default ${isOpen ? "opacity-100" : ""}`}
            src="/assets/svg/innovatica-logo.svg"
            alt={t("header.alt")}
            width="24"
            height="32"
          />
        </Link>
        <div
          onClick={toggleBurger}
          id="burger-div"
          className={`cursor-pointer flex flex-col gap-[4.5px] ${isOpen ? "my-1.5 mx-1.5" : "my-1.5 mx-1.5"}`}
        >
          <span
            id="burger-line-top"
            className={`${isOpen ? "rotate-45" : ""} transition-default block w-4 h-px bg-neutral-bright-beginning`}
          ></span>
          <span
            id="burger-line-middle"
            className={`${isOpen ? "opacity-0" : ""} transition-default block w-4 h-px bg-neutral-bright-beginning`}
          ></span>
          <span
            id="burger-line-bottom"
            className={`${isOpen ? "-rotate-45 translate-xy-half" : ""} transition-default block w-4 h-px bg-neutral-bright-beginning`}
          ></span>
        </div>
      </div>
      <nav className="w-93.75 h-100svh min-h-full flex flex-col justify-between text-neutral-bright-beginning text-[14px] font-normal overflow-y-scroll">
        <ul className="flex flex-col text-neutral-bright-beginning text-[14px] font-nav font-normal">
          <li className="px-12 py-4">
            <Link className="uppercase" href="/about" onClick={toggleBurger}>
              {t("header.nav.1")}
            </Link>
          </li>
          <li className="px-12 py-4">
            <Link className="uppercase" href="/products" onClick={toggleBurger}>
              {t("header.nav.2")}
            </Link>
          </li>
          <li className="px-12 py-4">
            <Link
              className="uppercase"
              href="/expertise"
              onClick={toggleBurger}
            >
              {t("header.nav.3")}
            </Link>
          </li>
          <li className="px-12 py-4">
            <Link
              className="uppercase"
              href="/investors"
              onClick={toggleBurger}
            >
              {t("header.nav.4")}
            </Link>
          </li>
          <li className="px-12 py-4">
            <Link className="uppercase" href="/career" onClick={toggleBurger}>
              {t("header.nav.5")}
            </Link>
          </li>
          <li className="px-12 py-4">
            <Link className="uppercase" href="/contact" onClick={toggleBurger}>
              {t("header.nav.6")}
            </Link>
          </li>
          <li className="px-12 py-4">
            <Link
              className="uppercase"
              href={`${locale === "ru" ? "../en/" + path.slice(path.search("/\//g") + 5) : "../ru/" + path.slice(path.search("/\//g") + 5)}`}
              onClick={toggleBurger}
            >
              {t("header.nav.lang_burger")}
            </Link>
          </li>
        </ul>
        <button
          className="cursor-pointer mt-5 mb-40 mx-5 py-4.5 w-auto bg-neutral-black-elbrus/20 rounded-2xl backdrop-blur-xs font-nav text-[16px] uppercase"
          onClick={scrollToForm}
        >
          {t("header.button")}
        </button>
      </nav>
    </div>
  );
};
