"use client";

import { CalculateColorCss } from "@/Helper-Components/tracks/calculateColor";
import { MeanCompletion } from "@/Helper-Components/tracks/calculateCompletion";
import ProgressBar from "@ramonak/react-progress-bar";

export default function ProgressBarComponent({ score }) {
  return (
    <>
      {" "}
      <ProgressBar
        bgColor={`${CalculateColorCss(MeanCompletion(score))}`}
        completed={MeanCompletion(score)}
      />
    </>
  );
}
