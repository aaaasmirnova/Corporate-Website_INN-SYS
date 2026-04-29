import React from "react";

export const Burger = () => {
  return (
    <div className="cursor-pointer flex justify-center items-center w-14 h-14 xl:hidden py-4 rounded-xl bg-neutral-black-elbrus/20 backdrop-blur-xs">
      <div id="burger-div" className="flex flex-col gap-[4.5px] my-1 mx-1.5">
        <span id="burger-line-top" className="block w-4 h-px bg-neutral-bright-beginning"></span>
        <span id="burger-line-middle" className="block w-4 h-px bg-neutral-bright-beginning"></span>
        <span id="burger-line-bottom" className="block w-4 h-px bg-neutral-bright-beginning"></span>
      </div>
    </div>
  );
};