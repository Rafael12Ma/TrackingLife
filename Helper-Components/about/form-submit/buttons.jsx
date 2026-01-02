import { useFormStatus } from "react-dom";

export default function Buttons() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        disabled={pending}
        type="submit"
        className={
          "bg-black cursor-pointer text-white font-semibold rounded-xl py-2 transition duration-200 hover:opacity-90 active:scale-95 w-full mt-2"
        }
      >
        {pending ? "Submitting..." : "Submit"}
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
