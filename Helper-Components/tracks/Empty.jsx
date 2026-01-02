import Link from "next/link";

export default function EmptyCalendar() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-7 my-10">
      <p>Start tracking your routine!</p>
      <Link
        href="/add"
        className="text-blue-500 font-bold font-mono hover:scale-125 transition duration-200 cursor-pointer"
      >
        Add your first routine day now!
      </Link>
      <hr className="w-80 sm:w-100 md:w-120 lg:w-160 xl:w-200 2xl:w-250 opacity-30 text-green-800" />
    </div>
  );
}
