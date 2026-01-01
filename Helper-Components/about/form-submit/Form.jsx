"use client";

import { useActionState } from "react";
import Buttons from "./buttons";
import { createTracks } from "@/actions/indx";
import { habits } from "./habits";

export default function Form() {
  const [state, formAction] = useActionState(createTracks, {});

  return (
    <>
      <form action={formAction} className="grid grid-cols-3 w-full gap-4">
        {habits.map((habit, i) => (
          <label key={i} className="flex items-center gap-3 text-sm">
            <input
              name="habits"
              id={`habit-${i}`}
              type="checkbox"
              value={habit}
              className="w-4 h-4 border-default-medium rounded-xs accent-red-500/25 focus:ring-red-500 dark:focus:purple-red-600 ring-offset-neutral-primary focus:ring-2"
            />

            <span className="font-semibold font-sans">{habit}</span>
          </label>
        ))}
        <div className="col-span-full flex justify-center">
          <Buttons />
        </div>
      </form>
    </>
  );
}
