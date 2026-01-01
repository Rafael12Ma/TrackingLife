export default function Buttons() {
  return (
    <>
      <button
        type="submit"
        className={
          "bg-black cursor-pointer text-white font-semibold rounded-xl py-2 transition duration-200 hover:opacity-90 active:scale-95 w-full mt-2"
        }
      >
        Submit
      </button>
      <button
        className="bg-black cursor-pointer text-white font-semibold rounded-xl py-2 transition duration-200 hover:opacity-90 active:scale-95 w-full mt-2"
        type="reset"
      >
        Reset
      </button>
    </>
  );
}
