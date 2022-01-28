import { CoverageInfo } from "../coverage-info";

export const perspective: CoverageInfo[] = [
  { style: "perspective",
    values: "{length}|none|initial|inherit"
  },
  { style: "perspective-origin",
    values: "{x-axis} {y-axis}|initial|inherit",
    skip: true,
    note: "This should be covered in the future"
  }
]