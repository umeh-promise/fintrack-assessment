"use client";

import { AppGridIcon, Logo, MenuIcon, SearchIcon } from "@/icons";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-[1.6rem]">
      <header className="flex items-center gap-[2.4rem]">
        <MenuIcon />
        <Logo />
      </header>
      <section className="relative cursor-pointer items-center  text-white flex gap-[2.4rem]">
        <SearchIcon />
        <AppGridIcon />
        <figure className="relative size-[4rem] rounded-full">
          <Image
            src="/img/avatar.svg"
            alt="profile"
            className=" object-cover object-center"
            fill
          />
        </figure>
      </section>
    </nav>
  );
}
