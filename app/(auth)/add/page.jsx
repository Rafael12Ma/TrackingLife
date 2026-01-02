import { getTracks } from "@/actions/indx";
import DateBox, { getDate } from "@/Helper-Components/about/date-box/DateBox";
import Form from "@/Helper-Components/about/form-submit/Form";
import { auth } from "@/LIB/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AddTrack() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const tracks = await getTracks(session.user.email);
  const { month, year, date } = getDate();
  const fullDate = date + "/" + month + "/" + year;

  let isSent = false;
  tracks.map((track) => {
    const datee = new Date(track.date).toLocaleDateString();
    if (datee === fullDate) {
      isSent = true;
      return;
    }
  });
  console.log("isSent=", isSent);
  let contentSentData;
  if (isSent) {
    contentSentData = (
      <div className="flex flex-col justify-center items-center m-5 gap-2">
        <h1 className="text-lg font-serif font-semibold">
          Your data today ({fullDate}) has been sent successfully!✅
        </h1>
        <Link
          className="bg-black text-white p-1 font-serif hover:scale-110 transition duration-1000 animate-pulse rounded-lg"
          href="/tracks"
        >
          Display tracks
        </Link>
      </div>
    );
  }

  return (
    <div className=" max-h-screen flex flex-col items-center justify-center mx-auto bg-gray-50 py-20">
      <div className="text-center mb-6 animate-pulse opacity-50">
        {/* <h1>Currently working on it...</h1> */}
        Add your daily routine
      </div>
      <div className="w-full max-w-3xl border rounded-xl bg-white shadow-sm flex flex-col md:flex-row justify-center items-center md:items-start gap-6 p-4">
        {isSent ? (
          contentSentData
        ) : (
          <>
            <DateBox />
            <Form />
          </>
        )}
      </div>
    </div>
  );
}
