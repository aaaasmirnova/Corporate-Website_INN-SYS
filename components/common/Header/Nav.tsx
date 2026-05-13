"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
export const Nav = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const path = usePathname();

  return (
    <nav className="hidden xl:block">
      <ul className="flex flex-row text-neutral-bright-beginning text-[14px] font-nav font-normal">
        <li className="px-6 py-4">
          <Link className="uppercase" href="/about">
            {t("header.nav.1")}
          </Link>
        </li>
        <li className="px-6 py-4">
          <Link className="uppercase" href="/products">
            {t("header.nav.2")}
          </Link>
        </li>
        <li className="px-6 py-4">
          <Link className="uppercase" href="/expertise">
            {t("header.nav.3")}
          </Link>
        </li>
        <li className="px-6 py-4">
          <Link className="uppercase" href="/investors">
            {t("header.nav.4")}
          </Link>
        </li>
        <li className="px-6 py-4">
          <Link className="uppercase" href="/career">
            {t("header.nav.5")}
          </Link>
        </li>
        <li className="px-6 py-4">
          <Link className="uppercase" href="/contact">
            {t("header.nav.6")}
          </Link>
        </li>
        <li className="px-6 py-4">
          <Link
            className="uppercase"
            href={`${locale === "ru" ? "../en/" + path.slice(path.search("/\//g") + 5) : "../ru/" + path.slice(path.search("/\//g") + 5)}`}
          >
            {t("header.nav.lang")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
