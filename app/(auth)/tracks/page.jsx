import { getTracks } from "@/actions/indx";
import { getDate } from "@/Helper-Components/about/date-box/DateBox";
import { habits } from "@/Helper-Components/about/form-submit/habits";
import { auth } from "@/LIB/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function TracksPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  const { month, year, date } = getDate();
  const fullDateToday = date + "/" + month + "/" + year;
  const tracks = await getTracks(session.user.email);
  let isSentToday = false;

  let counter = 0;
  tracks.map((track) => {
    const datee = new Date(track.date).toLocaleDateString();
    if (datee === fullDateToday) {
      isSentToday = true;
      counter += 1;
      return;
    }
  });

  //
  const groupedTracks = tracks.reduce((acc, track) => {
    const dayKey = track.date.toISOString().split("T")[0]; // YYYY-MM-DD

    if (!acc[dayKey]) {
      acc[dayKey] = [];
    }

    acc[dayKey].push(track);
    return acc;
  }, {});
  //

  return (
    <>
      {/* <div className="text-center m-10 animate-pulse opacity-40">
        <h1>Currently working on it...</h1>
      </div>
      {tracks.length > 0 && (
        <ul className="flex flex-col items-center gap-2 justify-center ">
          {tracks.map((track) => {})}
          {isSentToday &&
            tracks.map((track) => (
              <div key={track.id}>
                <li>{track.habit},</li>
                <p>{(counter / habits.length) * 100}%</p>
              </div>
            ))}
        </ul>
      )}
      <div className="flex flex-col gap-5 justify-center items-center">
        {tracks.length === 0 && (
          <div className="flex flex-col justify-center items-center gap-y-3">
            <p>Start tracking your routine!</p>
            <Link
              href="/add"
              className="text-blue-500 font-bold font-mono hover:scale-125 transition duration-200 cursor-pointer"
            >
              Add your first routine day now!
            </Link>
          </div>
        )}
        <hr className="w-80 sm:w-100 md:w-120 lg:w-160 xl:w-200 2xl:w-250 opacity-30 text-green-800" />
      </div> */}
      {/*  */}
      {tracks.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-y-3">
          <p>Start tracking your routine!</p>
          <Link
            href="/add"
            className="text-blue-500 font-bold font-mono hover:scale-125 transition duration-200 cursor-pointer"
          >
            Add your first routine day now!
          </Link>
          <hr className="w-80 sm:w-100 md:w-120 lg:w-160 xl:w-200 2xl:w-250 opacity-30 text-green-800" />
        </div>
      ) : (
        <div className="flex flex-col my-5 justify-center">
          <p className="text-2xl font-serif font-semibold m-5 text-center">
            Bellow are your tracks so far
          </p>
          <ul className="flex flex-col justify-center ">
            {Object.entries(groupedTracks).map(([day, tracks]) => {
              const completion = Math.round(
                (tracks.length / habits.length) * 100
              );

              return (
                <li
                  key={day}
                  className="flex justify-between items-center border mx-5 sm:mx-15 md:mx-30 lg:mx-50 xl:mx-60 2xl:mx-100  my-2 p-4 rounded-lg"
                >
                  <h3 className="font-bold">{day}</h3>
                  <h2>
                    Score : {tracks.length}/{habits.length}
                  </h2>
                  <ul className="ml-4 grid grid-cols-2 list-decimal gap-2 border p-2 m-1 rounded-lg">
                    {tracks.map((track) => (
                      <li
                        key={track.id}
                        className="text-green-500 text-[0.7rem]"
                      >
                        {track.habit}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-2 text-sm">Completion: {completion}%</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {/*  */}
    </>
  );
}
