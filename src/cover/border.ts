import { CoverInfo } from "../cover-info";

export const border: CoverInfo[] = [
  { style: "border",
    values: "border-width border-style border-color|initial|inherit",
    skip: true
  },
  { style: "border-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  },
  { style: "border-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  }
]