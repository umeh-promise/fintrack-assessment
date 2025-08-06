"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

export const settingsRoutes = [
  {
    id: 1,
    title: "Dashboard",
    url: "/",
  },
  {
    id: 2,
    title: "Transactions",
    url: "/transactions",
  },
  {
    id: 3,
    title: "Reports",
    url: "/reports",
  },
  {
    id: 4,
    title: "Settings",
    url: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const activeMenuClass = useCallback(
    (link: { url: string }) => {
      return pathname === link.url;
    },
    [pathname]
  );

  return (
    <nav className="no-scrollbar flex flex-col justify-between gap-y-[5.4rem] overflow-y-auto text-grey-300 md:flex">
      <ul className="scrollbar-none flex w-full flex-col">
        {settingsRoutes.map((link) => (
          <li
            key={link.id}
            className={cn(
              "rounded-[1.6rem] text-[1.5rem] font-medium text-grey-300 transition",
              {
                "bg-grey-100/[16%] text-grey-100 ": activeMenuClass(link),
              }
            )}
          >
            <Link
              href={link.url}
              className="flex items-center gap-x-[1rem] px-[1.8rem] py-[.8rem]"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
