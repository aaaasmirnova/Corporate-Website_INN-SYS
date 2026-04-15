import React from "react";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-row text-white font-nav text-[14px] font-normal">
        <li className="px-[24px] py-[16px]"><a href="#!">ПРОДУКТЫ</a></li>
        <li className="px-[24px] py-[16px]"><a href="#!">О КОМПАНИИ</a></li>
        <li className="px-[24px] py-[16px]"><a href="#!">ЭКСПЕРТИЗА</a></li>
        <li className="px-[24px] py-[16px]"><a href="#!">КАРЬЕРА</a></li>
        <li className="px-[24px] py-[16px]"><a href="#!">ИНВЕСТОРАМ</a></li>
        <li className="px-[24px] py-[16px]"><a href="#!">EN</a></li>
      </ul>
    </nav>
  );
};