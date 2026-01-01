import DateBox from "@/Helper-Components/about/date-box/DateBox";
import Form from "@/Helper-Components/about/form-submit/Form";

export default function AddTrack() {
  return (
    <div className="w-full max-h-screen flex flex-col items-center justify-center bg-gray-50 py-20">
      <div className="text-center mb-6 animate-pulse opacity-50">
        <h1>Currently working on it...</h1>
      </div>
      <div className="w-full  max-w-3xl border rounded-xl bg-white shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 p-4">
        <DateBox />
        <Form />
      </div>
    </div>
  );
}
