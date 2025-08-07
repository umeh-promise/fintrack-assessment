"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import { Logo, MenuIcon } from "@/icons";

export const sidebarRoutes = [
  {
    id: 1,
    title: "Dashboard",
    url: "/",
  },
  {
    id: 2,
    title: "Transactions",
    url: "#",
  },
  {
    id: 3,
    title: "Reports",
    url: "#",
  },
  {
    id: 4,
    title: "Settings",
    url: "#",
  },
];

export default function Sidebar({
  showMobileSidebar,
  handleCloseSidebar,
}: {
  showMobileSidebar: boolean;
  handleCloseSidebar: () => void;
}) {
  const pathname = usePathname();

  const activeMenuClass = useCallback(
    (link: { url: string }) => {
      return pathname === link.url;
    },
    [pathname]
  );

  return (
    <aside
      className={cn(
        "fixed inset-0 opacity-0 size-full z-40  transition-opacity duration-300 lg:flex pointer-events-none lg:static lg:inset-auto lg:opacity-100 lg:pointer-events-auto",
        {
          "opacity-100 bg-grey-700/10 lg:bg-background pointer-events-auto":
            showMobileSidebar,
        }
      )}
    >
      <nav
        className={cn(
          "fixed top-0 left-0 h-full w-[28rem] bg-background z-50 flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto -translate-x-full no-scrollbar gap-y-[2.8rem] overflow-y-auto text-grey-300 md:flex p-[2rem] lg:w-full ",
          {
            "translate-x-0": showMobileSidebar,
          }
        )}
      >
        <header className="flex items-center gap-[2.4rem] lg:hidden">
          <button onClick={handleCloseSidebar}>
            <MenuIcon />
          </button>
          <Logo />
        </header>
        <ul className="scrollbar-none flex w-full flex-col">
          {sidebarRoutes.map((link) => (
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
    </aside>
  );
}
