import { CoverInfo } from "../cover-info";

export const perspective: CoverInfo[] = [
  { style: "perspective",
    values: "{length}|none|initial|inherit"
  },
  { style: "perspective-origin",
    values: "{x-axis} {y-axis}|initial|inherit",
    skip: true,
    note: "This should be covered in the future"
  }
]