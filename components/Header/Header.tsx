import React from "react";
import Image from "next/image";
import Logo from "@/public/innovatica-logo.svg"
import { Nav } from "./Nav"

export const Header = () => {
  return (
    <header className="fixed top-0 my-[32px] px-[24px] rounded-xl bg-neutral-black-elbrus/20 backdrop-blur-xs text-white">
      <div className="flex justify-between items-center">
        <div className="px-[32px]">
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