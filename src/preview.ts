/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
import type { Renderer, ProjectAnnotations } from "@storybook/types";
import { PARAM_KEY } from "./constants";
import { withGlobals } from "./withGlobals";
import { withRoundTrip } from "./withRoundTrip";
import { withBorder } from "./withBorder";

/**
 * Note: if you want to use JSX in this file, rename it to `preview.tsx`
 * and update the entry prop in tsup.config.ts to use "src/preview.tsx",
 */
console.log(
  " %c[SB Addon Starter] --------- %cpreview.ts%c --------- ",
  "font-weight: normal; color: white",
  "font-weight: bold; color: orange",
  "font-weight: normal; color: white"
);

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withBorder, withGlobals, withRoundTrip],
  globals: {
    [PARAM_KEY]: false,
  },
};

export default preview;
