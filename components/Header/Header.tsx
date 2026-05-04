import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/svg/innovatica-logo.svg"
import { Nav } from "./Nav"
import { Burger } from "./Burger";

export const Header = () => {
  return (
    <header className="w-full md:w-180 xl:w-auto fixed top-0 my-8 px-6 z-20 text-neutral-bright-beginning">
      <div className="relative w-full flex flex-row justify-between">
        <div className="flex justify-between items-center rounded-xl bg-neutral-black-elbrus/20 backdrop-blur-xs">
          <div className="px-4 py-3 xl:px-8 xl:py-0">
            <Image
              className=""
              src={Logo}
              alt="ИННОВАТИКА"
              width="24"
              height="32"
            />
          </div>
          <Nav />
        </div>
        <Burger />
      </div>
    </header>
  );
};
