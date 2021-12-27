import { CoverInfo } from "../cover-info";

export const border: CoverInfo[] = [
  { style: "border",
    values: "border-width border-style border-color|initial|inherit",
    skip: true
  },
  { style: "border-bottom",
    values: "border-width border-style border-color|initial|inherit",
    skip: true
  },
  { style: "border-bottom-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-bottom-left-radius",
    values: "{length}|initial|inherit"
  }
]