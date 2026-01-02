"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import icon from "@/public/goodLife.jpg";
import { authClient } from "@/LIB/auth-client";
import { MdAccountBox } from "react-icons/md";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Navbar() {
  const path = usePathname();
  const { data: session } = authClient.useSession({
    refetchInterval: 10 * 1000, // every 1 minute
  });
  const router = useRouter();

  return (
    <>
      <nav className="m-2 text-[0.9rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.7rem] rounded-3xl max-[610px]:gap-5  flex p-5 justify-center items-center gap-10 text-gray-500 bg-black font-serif font-semibold">
        <Link href="/">
          <img
            className={`rounded-b-lg opacity-40 w-6 sm:w-8 md:w-10 lg:w-12  ${
              path === "/" ? "opacity-100" : undefined
            }`}
            alt="Good life"
            src={icon.src}
          ></img>
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
        {!session ? (
          <Link
            className={path === "/login" ? "text-[#EEEEEE]" : undefined}
            href="/login"
          >
            Login
          </Link>
        ) : (
          <div className="flex gap-5">
            <button
              className="cursor-pointer hover:scale-110 transition duration-700 hover:text-red-500"
              onClick={() =>
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      toast.success("Logged out successfully");
                      router.push("/login");
                    },
                    onError: () => {
                      toast.error("Logout failed!");
                    },
                  },
                })
              }
            >
              Logout
            </button>
            <div className="flex flexcol justify-center min-[596px]:hidden max-[596]:text-[0.6rem] items-center gap-1 text-white ">
              <MdAccountBox />
              <p className="text-green-500">{session?.user?.email}</p>
            </div>
          </div>
        )}

        {session && (
          <div className="flex justify-center text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1rem] max-[596px]:hidden items-center gap-1 text-white ">
            <MdAccountBox />
            <p className="text-green-500">{session?.user?.email}</p>
          </div>
        )}
      </nav>
    </>
  );
}
