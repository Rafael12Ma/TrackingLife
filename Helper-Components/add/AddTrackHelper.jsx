import Link from "next/link";
import DateBox, { getDate } from "../about/date-box/DateBox";
import Form from "../about/form-submit/Form";
import { getTracks } from "@/actions/indx";

export default async function AddTrackHelper({ session }) {
  const tracks = await getTracks(session.user.email);
  const todayISO = new Date().toISOString().split("T")[0];
  const isSent = tracks.some(
    (track) => track.date.toISOString().split("T")[0] === todayISO
  );
  let contentSentData;
  if (isSent) {
    contentSentData = (
      <div className="flex flex-col justify-center items-center m-5 gap-2">
        <h1 className="text-lg font-serif font-semibold">
          Your data today has been sent successfully!✅
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
    <>
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
    </>
  );
}
