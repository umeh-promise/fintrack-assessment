"use client";

import { useRenderView } from "@/hooks/useRenderView";
import DashboardHeader from "./dashboard-header";
import { cn } from "@/utils";
import Overview from "./overview";
import React from "react";

const tabs = ["overview", "transactions"] as const;
type TabType = (typeof tabs)[number];

const tabContent: Record<TabType, React.ReactElement> = {
  overview: <Overview />,
  transactions: <>No Transactions view yet</>,
};

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useRenderView<TabType>({
    defaultTab: "overview",
  });
  return (
    <section className="grid gap-[2.4rem]">
      <DashboardHeader />
      <ul className="flex items-center border-b-[3px] border-grey-50/[20%] w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative flex items-center py-[1.2rem] px-[2.8rem] capitalize text-grey-75 font-medium cursor-pointer",
              {
                "text-green-500": activeTab === tab,
                "after:absolute after:bottom-[-3px] after:left-0 after:right-[-1rem] after:h-[3px] after:bg-green-500":
                  activeTab === tab,
              }
            )}
          >
            {tab}
          </button>
        ))}
      </ul>
      {tabContent[activeTab as keyof typeof tabContent]}
    </section>
  );
}
