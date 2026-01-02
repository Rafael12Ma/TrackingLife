export default function DateDisplay({ day }) {
  function parseISODate(day) {
    const [year, month, date] = day.split("-").map(Number);

    return {
      year,
      month,
      date,
      monthIndex: month - 1,
    };
  }

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
  const { year, date, monthIndex } = parseISODate(day);

  const dayOfWeek = new Date(year, monthIndex, date).getDay();

  return (
    <>
      <div className="flex flex-col items-center gap-2 border-r md:border-r-0 md:border-b pr-4 md:pr-0 md:pb-4">
        <h1 className="text-xs font-semibold tracking-wide text-gray-700">
          {monthList[monthIndex]}
        </h1>
        <div className="text-center">
          <p className="text-red-500 font-semibold">{dayList[dayOfWeek]}</p>
          <p className="text-black font-bold text-4xl leading-none">{date}</p>
        </div>
      </div>
    </>
  );
}

export function getDate() {
  const now = new Date();
  const month = now.getMonth() + 1;
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
