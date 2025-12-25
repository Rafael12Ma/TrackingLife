export default function AddTrack() {
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

  const habits = [
    "Read a book",
    "Workout",
    "Meditate",
    "Study",
    "Practice coding",
    "Sleep early",
  ];

  return (
    <div className="w-full max-h-screen flex flex-col items-center justify-center bg-gray-50 py-20">
      <div className="text-center mb-6 animate-pulse opacity-50">
        <h1>Currently working on it...</h1>
      </div>

      <div className="w-full max-w-3xl border rounded-xl bg-white shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 p-4">
        {/* Date Badge */}
        <div className="flex flex-row md:flex-col items-center gap-2 border-r md:border-r-0 md:border-b pr-4 md:pr-0 md:pb-4">
          <h1 className="rotate-270 md:rotate-0  text-xs font-semibold tracking-wide text-gray-700">
            {monthList[month]}
          </h1>
          <div className="text-center">
            <p className="text-red-500 font-semibold">{dayList[day]}</p>
            <p className="text-black font-bold text-4xl leading-none">{date}</p>
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-3 w-full gap-4">
          {habits.map((habit, i) => (
            <label key={i} className="flex items-center gap-3 text-sm">
              <input type="checkbox" className="form-checkbox h-5 w-5" />
              <span className="font-medium">{habit}</span>
            </label>
          ))}
          <div className="col-span-full flex justify-center">
            <button
              type="submit"
              className="bg-black text-white font-semibold rounded-xl py-2 transition
            duration-200 hover:opacity-90 active:scale-95 w-full  mt-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
