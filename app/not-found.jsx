import peter from "@/public/peter.jpg";
import Link from "next/link";

export default function Notfound() {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center m-20">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="font-mono font-semibold text-lg">
            Maybe you went too far surfing?
          </h1>
          <Link
            href="/tracks"
            className="font-semibold hover:scale-110 transition duration-200 cursor-pointer text-blue-500"
          >
            Go to Tracks
          </Link>
        </div>
        <img
          className="rounded-xl shadow-black"
          src={peter.src}
          width={600}
          alt="Peter Griffin surfing way to far."
        />
      </div>
    </>
  );
}
