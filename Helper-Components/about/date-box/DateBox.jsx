export default function DateBox() {
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();
  const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className="flex flex-row md:flex-col items-center gap-2 border-r md:border-r-0 md:border-b pr-4 md:pr-0 md:pb-4">
        <h1 className="rotate-270 md:rotate-0  text-xs font-semibold tracking-wide text-gray-700">
          {monthList[month]}
        </h1>
        <div className="text-center">
          <p className="text-red-500 font-semibold">{dayList[day]}</p>
          <p className="text-black font-bold text-4xl leading-none">{date}</p>
        </div>
      </div>
    </>
  );
}

export function getDate() {
  const now = new Date();
  const month = now.getMonth()+1;
  const year = now.getFullYear();
  const date = now.getDate();
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return { month, year, date };
}
