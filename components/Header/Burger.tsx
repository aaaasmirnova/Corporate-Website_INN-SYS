"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/svg/innovatica-logo.svg"

export const Burger = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleBurger = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col justify-start items-start w-14 h-14 xl:hidden py-4 bg-neutral-black-elbrus/20 backdrop-blur-xs transition-250ms overflow-clip ${isOpen ? "fixed top-0 right-0 w-93.75 h-svh rounded-none" : "absolute top-0 right-0 rounded-xl"}`}>
      <div className={`relative ${isOpen ? "px-12 py-8" : "px-0 py-0"} xl:px-8 w-full flex flex-row ${isOpen ? "justify-end items-center" : "justify-center items-center"}`}>
        <Image
          className={`absolute top-5 left-10 opacity-0 transition-default ${isOpen ? "opacity-100" : ""}`}
          src={Logo}
          alt="ИННОВАТИКА"
          width="24"
          height="32"
        />
        <div onClick={toggleBurger} id="burger-div" className={`cursor-pointer flex flex-col gap-[4.5px] ${isOpen ? "my-1.5 mx-1.5" : "my-1.5 mx-1.5"}`}>
          <span id="burger-line-top" className={`${isOpen ? "rotate-45" : ""} transition-default block w-4 h-px bg-neutral-bright-beginning`}></span>
          <span id="burger-line-middle" className={`${isOpen ? "opacity-0" : ""} transition-default block w-4 h-px bg-neutral-bright-beginning`}></span>
          <span id="burger-line-bottom" className={`${isOpen ? "-rotate-45 translate-xy-half" : ""} transition-default block w-4 h-px bg-neutral-bright-beginning`}></span>
        </div>
      </div>
      <nav className="w-93.75 h-100svh flex flex-col text-neutral-bright-beginning text-[14px] font-normal">
        <ul className="flex flex-col text-neutral-bright-beginning text-[14px] font-nav font-normal">
          <li className="px-12 py-4"><a href="#!" className="uppercase">ПРОДУКТЫ</a></li>
          <li className="px-12 py-4"><a href="#!" className="uppercase">О КОМПАНИИ</a></li>
          <li className="px-12 py-4"><a href="#!" className="uppercase">ЭКСПЕРТИЗА</a></li>
          <li className="px-12 py-4"><a href="#!" className="uppercase">КАРЬЕРА</a></li>
          <li className="px-12 py-4"><a href="#!" className="uppercase">ИНВЕСТОРАМ</a></li>
          <li className="px-12 py-4"><a href="#!" className="uppercase">ENGLISH</a></li>
        </ul>
      </nav>
      <button className="cursor-pointer absolute bottom-16 mx-5 py-4.5 w-full bg-neutral-black-elbrus/20 rounded-2xl backdrop-blur-xs font-nav text-[16px] uppercase">
        СВЯЗАТЬСЯ
      </button>
    </div>
  );
};
