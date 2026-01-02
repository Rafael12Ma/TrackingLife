"use client";

import Link from "next/link";

export default function ErroPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-30">
        <h1 className="text-red-500 font-semibold text-[2rem]">ERROR 404</h1>
        <h1 className="m-4">An error has occured !</h1>
        <Link
          href="/tracks"
          className="font-semibold hover:scale-110 transition duration-200 cursor-pointer text-blue-500"
        >
          Go to Tracks
        </Link>
      </div>
    </>
  );
}
