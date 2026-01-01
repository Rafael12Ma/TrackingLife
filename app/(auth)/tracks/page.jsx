import { getTracks } from "@/actions/indx";
import { getDate } from "@/Helper-Components/about/date-box/DateBox";
import { habits } from "@/Helper-Components/about/form-submit/habits";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function TracksPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  const { month, year, date } = getDate();
  const fullDate = date + "/" + month + "/" + year;
  const tracks = await getTracks(session.user.email);
  let isSentToday = false;

  let counter = 0;
  tracks.map((track) => {
    const datee = new Date(track.date).toLocaleDateString();
    if (datee === fullDate) {
      isSentToday = true;
      counter += 1;
      return;
    }
  });

  return (
    <>
      <div className="text-center m-10 animate-pulse opacity-40">
        <h1>Currently working on it...</h1>
      </div>
      {tracks.length > 0 && (
        <ul className="flex flex-col items-center justify-center border-2">
          {isSentToday &&
            tracks.map((track) => <li key={track.id}>{track.habit},</li>)}
          {(counter / habits.length) * 100}%
        </ul>
      )}
    </>
  );
}
