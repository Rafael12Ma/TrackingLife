export default function AddTrack() {
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();
  const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
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
  console.log("Month=", month);
  return (
    <>
      <div className="text-center m-10 animate-pulse opacity-40">
        <h1>Currently working on it...</h1>
      </div>
      <div className="m-10 border-2 flex  p-10 justify-evenly">
        <div className="border-3 rounded-md  flex justify-center p-1">
          <h1 className="rotate-270 text-[0.7rem] font-semibold">
            {monthList[month]}
          </h1>
          <div className="flex flex-col  ">
            <p className="text-red-600 font-semibold">{dayList[day]}</p>
            <p className="text-black font-semibold text-3xl">{date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <form className="flex gap-10" action="">
            <div className="flex flex-col">
              <label htmlFor="">Read a book</label>
              <input type="checkbox" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Read a book</label>
              <input type="checkbox" />
            </div>{" "}
            <div className="flex flex-col">
              <label htmlFor="">Read a book</label>
              <input type="checkbox" />
            </div>{" "}
            <div className="flex flex-col">
              <label htmlFor="">Read a book</label>
              <input type="checkbox" />
            </div>{" "}
            <div className="flex flex-col">
              <label htmlFor="">Read a book</label>
              <input type="checkbox" />
            </div>{" "}
            <div className="flex flex-col">
              <label htmlFor="">Read a book</label>
              <input type="checkbox" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
