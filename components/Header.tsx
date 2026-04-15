import React from "react";
import Image from "next/image";
import Logo from "../public/innovatica-logo.svg"

export const Header = () => {
  return (
    <header className="fixed top-0 my-[32px] px-[24px] rounded-xl bg-neutral-black-elbrus/20 backdrop-blur-xs text-white">
      <div className="flex justify-between items-center">
        <div className="px-[32px] font-logo text-2xl text-accent-2">
          <Image
            className=""
            src={Logo}
            alt="INNOVATICA"
            width="24"
            height="32"
          />
        </div>
        <div className="text-accent-3">
          <nav>
            <ul className="flex flex-row text-white font-montserrat">
              <li className="px-[24px] py-[16px]"><a href="#!">ПРОДУКТЫ</a></li>
              <li className="px-[24px] py-[16px]"><a href="#!">О КОМПАНИИ</a></li>
              <li className="px-[24px] py-[16px]"><a href="#!">ЭКСПЕРТИЗА</a></li>
              <li className="px-[24px] py-[16px]"><a href="#!">КАРЬЕРА</a></li>
              <li className="px-[24px] py-[16px]"><a href="#!">ИНВЕСТОРАМ</a></li>
              <li className="px-[24px] py-[16px]"><a href="#!">EN</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};