"use client";

import { CalculateColorCss } from "@/Helper-Components/tracks/calculateColor";
import { MeanCompletion } from "@/Helper-Components/tracks/calculateCompletion";
import ProgressBar from "@ramonak/react-progress-bar";

export default function ProgressBarComponent({ score }) {
  let flag = false;
  const a = score.length;
  let color = CalculateColorCss(score);
  if (a > 0) {
    flag = true;
    color = CalculateColorCss(MeanCompletion(score));
    score = MeanCompletion(score);
  }

  return (
    <>
      <ProgressBar
        labelColor="black"
        labelAlignment="right"
        height="1.6rem"
        borderRadius="0.5rem"
        animateOnRender
        bgColor={color}
        completed={score}
        width={a ? "20rem" : "7rem"}
      />
    </>
  );
}
