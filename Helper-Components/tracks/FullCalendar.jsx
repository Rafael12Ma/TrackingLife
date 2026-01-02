import { getDate } from "../about/date-box/DateBox";
import DateDisplay from "../about/date-box/DateDisplay";
import { habits } from "../about/form-submit/habits";
import ColForm from "./columns/colForm";

export default async function FullCalendar({ tracks }) {
  const { month, year, date } = getDate();
  const fullDateToday = date + "/" + month + "/" + year;
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
      <div className="flex flex-col my-5 justify-center">
        <p className="text-2xl font-serif font-semibold m-5 text-center">
          Bellow are your tracks so far
        </p>
        <ul className="flex flex-col justify-center ">
          {Object.entries(groupedTracks).map(([day, tracks]) => {
            // missing habits
            const completedHabits = tracks.map((t) => t.habit);
            const missingHabits = habits.filter(
              (habit) => !completedHabits.includes(habit)
            );
            // missing habits
            const completion = Math.round(
              (tracks.length / habits.length) * 100
            );

            return (
              <div key={day}>
                <li className="flex justify-between items-center border mx-5 sm:mx-15 md:mx-30 lg:mx-50 xl:mx-60 2xl:mx-100 px-4 gap-5  my-2 p-4 rounded-lg">
                  <DateDisplay day={day} />
                  <ColForm colTitle="Score">
                    {tracks.length}/{habits.length}
                  </ColForm>
                  <ul className="grid grid-cols-2 lg:grid-cols-3 list-decimal gap-4 border m-1 p-4 rounded-lg">
                    {tracks.map((track) => (
                      <li
                        key={track.id}
                        className="text-green-500 text-[0.7rem]"
                      >
                        {track.habit}
                      </li>
                    ))}
                    {missingHabits.map((missingHabit) => (
                      <li
                        className="text-red-500 line-through text-[0.7rem]"
                        key={missingHabit}
                      >
                        {missingHabit}
                      </li>
                    ))}
                  </ul>
                  <ColForm colTitle="Completion">{completion}%</ColForm>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
