"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import icon from "@/public/goodLife.jpg";
import Image from "next/image";

export default function Navbar() {
  const path = usePathname();

  return (
    <>
      <nav className="m-2 rounded-3xl flex p-5 justify-center items-center gap-10 text-gray-500 bg-black text-2xl font-serif font-semibold">
        <Link href="/home">
          <Image
            width={30}
            className="rounded-b-lg"
            alt="Good life"
            src={icon}
          ></Image>
        </Link>
        <Link
          className={path === "/home" ? "text-[#EEEEEE]" : undefined}
          href="/home"
        >
          Home
        </Link>
        <Link
          className={path === "/tracks" ? "text-[#EEEEEE]" : undefined}
          href="/tracks"
        >
          Tracks
        </Link>
      </nav>
    </>
  );
}
