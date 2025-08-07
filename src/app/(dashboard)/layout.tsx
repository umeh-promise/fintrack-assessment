"use client";

import Wrapper from "./_components/wrapper";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { useState } from "react";
import { cn } from "@/utils";

export default function AdminLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false);

  return (
    <Wrapper className={cn({ "h-screen lg:h-auto": showMobileSidebar })}>
      <Navbar handleOpenSidebar={() => setShowMobileSidebar(true)} />
      <section className="h-full overflow-hidden  pb-[.8rem]  lg:gap-[4.8rem] text-grey-300 lg:grid xl:grid-cols-[32rem_1fr] lg:grid-cols-[28rem_1fr] md:pb-[8rem] [&>*]:pt-[2.2rem] lg:[&>*]:py-[2.4rem] ">
        <Sidebar
          showMobileSidebar={showMobileSidebar}
          handleCloseSidebar={() => setShowMobileSidebar(false)}
        />
        <main className="transparent-scrollbar overflow-y-auto px-[1rem] md:px-[2.4rem] lg:px-[2.7rem]">
          {children}
        </main>
      </section>
    </Wrapper>
  );
}
