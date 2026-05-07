import React from "react";
import { useTranslations } from "next-intl";

export const Nav = () => {
  const t = useTranslations("Home");

  return (
    <nav className="hidden xl:block">
      <ul className="flex flex-row text-neutral-bright-beginning text-[14px] font-nav font-normal">
        <li className="px-6 py-4"><a href="#!" className="uppercase">{t("header.nav.1")}</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">{t("header.nav.2")}</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">{t("header.nav.3")}</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">{t("header.nav.4")}</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">{t("header.nav.5")}</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">{t("header.nav.6")}</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">{t("header.nav.lang")}</a></li>
      </ul>
    </nav>
  );
};
