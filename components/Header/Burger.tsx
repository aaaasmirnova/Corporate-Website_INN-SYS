import React from "react";
import Image from "next/image";
import BurgerImage from "../../public/assets/svg/burger.svg"

export const Burger = () => {
  return (
    <div className="cursor-pointer block xl:hidden p-4 rounded-xl bg-neutral-black-elbrus/20 backdrop-blur-xs">
      <Image
        className="my-1 mx-1.5"
        src={BurgerImage}
        alt="="
        width="16"
        height="12"
      />
    </div>
  );
};