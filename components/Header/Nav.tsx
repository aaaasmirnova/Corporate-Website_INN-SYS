import React from "react";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-row text-white font-nav text-[14px] font-normal">
        <li className="px-6 py-4"><a href="#!" className="uppercase">ПРОДУКТЫ</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">О КОМПАНИИ</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">ЭКСПЕРТИЗА</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">КАРЬЕРА</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">ИНВЕСТОРАМ</a></li>
        <li className="px-6 py-4"><a href="#!" className="uppercase">EN</a></li>
      </ul>
    </nav>
  );
};