import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/svg/innovatica-logo.svg"
import { Nav } from "./Nav"

export const Header = () => {
  return (
    <header className="fixed top-0 my-8 px-6 z-20 rounded-xl bg-neutral-black-elbrus/20 backdrop-blur-xs text-white">
      <div className="flex justify-between items-center">
        <div className="px-8">
          <Image
            className=""
            src={Logo}
            alt="INNOVATICA"
            width="24"
            height="32"
          />
        </div>
        <div className="text-accent-3">
          <Nav />
        </div>
      </div>
    </header>
  );
};