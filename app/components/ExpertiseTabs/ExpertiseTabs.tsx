"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ExpertiseTabNornikel } from "../ExpertiseTabNornikel/ExpertiseTabNornikel";
import { ExpertiseTabRoskosmos } from "../ExpertiseTabRoskosmos/ExpertiseTabRoskosmos";
import { ExpertiseTabBank } from "../Expertise/ExpertiseTabBank/ExpertiseTabBank";

const tabs = [
  {
    id: 1,
    title: "tabs.tab_1",
  },
  {
    id: 2,
    title: "tabs.tab_2",
  },
  {
    id: 3,
    title: "tabs.tab_3",
  },
];

export const ExpertiseTabs = () => {
  const t = useTranslations("Expertise");

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="container sm:mx-0">
      <div className="flex gap-x-1 max-w-108.5 w-full mb-24 p-1 font-open-sans text-sm text-[#807E7E] bg-[#1A191A] overflow-x-auto rounded-[18px] sm:text-base sm:max-w-112.5 sm:mx-auto sm:mb-17 sm:overflow-x-visible lg:max-w-125 lg:mb-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 shrink-0 basis-auto h-12 px-3 rounded-xl cursor-pointer sm:px-4 lg:px-6 ${activeTab === tab.id && "text-[#F8F7F7] bg-[#383737]"}`}
          >
            {t(tab.title)}
          </button>
        ))}
      </div>
      {activeTab === 1 && <ExpertiseTabBank />}
      {activeTab === 2 && <ExpertiseTabRoskosmos />}
      {activeTab === 3 && <ExpertiseTabNornikel />}
    </section>
  );
};
