import React, { FC } from "react";
import { StoryContext } from "@storybook/types";

export const withBorder = (Story: FC<unknown>, context: StoryContext) => {
  console.log(
    " %c[SB Addon Starter] -- Running %cwithBorder%c decorator",
    "font-weight: normal; color: white",
    "font-weight: bold; color: orange",
    "font-weight: normal; color: white"
  );
  return (
    <div
      style={{
        border: "2px dashed red",
        padding: "1rem",
      }}
    >
      <Story />
    </div>
  );
};
