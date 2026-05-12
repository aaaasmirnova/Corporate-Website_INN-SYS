import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Nav } from "./Nav"
import { Burger } from "./Burger";
import Link from "next/link";

export const Header = () => {
  const t = useTranslations("Home");

  return (
    <header className="w-full  xl:w-auto fixed top-0 my-8 px-6 z-20 text-neutral-bright-beginning">
      <div className="relative w-full flex flex-row justify-between">
        <div className="flex justify-between items-center rounded-xl bg-neutral-black-elbrus/20 backdrop-blur-xs">
          <div className="px-4 py-3 xl:px-8 xl:py-0">
            <Link className="uppercase" href="/">
              <Image
                className=""
                src="/assets/svg/innovatica-logo.svg"
                alt={t("header.alt")}
                width="24"
                height="32"
              />
            </Link>
          </div>
          <Nav />
        </div>
        <Burger />
      </div>
    </header>
  );
};
