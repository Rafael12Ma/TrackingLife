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
        <Link href="/">
          <Image
            width={30}
            className={`rounded-b-lg opacity-40 ${
              path === "/" ? "opacity-100" : undefined
            }`}
            alt="Good life"
            src={icon}
          ></Image>
        </Link>
        <Link
          className={path === "/add" ? "text-[#EEEEEE]" : undefined}
          href="/add"
        >
          Add
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
