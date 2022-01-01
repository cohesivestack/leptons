import { CoverInfo } from "../cover-info";

export const transform: CoverInfo[] = [
  { style: "transform",
    values: "none|{transform-functions}|initial|inherit",
    skip: true,
    note: "This could be covered in the future."
  },
  { style: "transform-style",
    values: "flat|preserve-3d|initial|inherit",
  },
  { style: "transform-origin",
    values: "{x-axis} {y-axis} {z-axis}|initial|inherit",
    skip: true,
    note: "This could be covered in the future."
  }
]