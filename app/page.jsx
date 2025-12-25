export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center  justify-center m-10">
        <div className="border-black border-x-2 p-2">
          <label className="text-2xl font-semibold font-sans" htmlFor="">
            What is this app for ?
          </label>
          <h1>
            This is a web app developed, so it can help you track your routine
            and be a better version of yourself.
          </h1>
        </div>
      </div>
    </>
  );
}
