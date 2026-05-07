import React from "react";

export const Nav = () => {
  return (
    <nav className="hidden xl:block">
      <ul className="flex flex-row text-neutral-bright-beginning text-[14px] font-nav font-normal">
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
