import { CoverInfo } from "../cover-info";

export const borderRight: CoverInfo[] = [
  { style: "border-right",
    values: "border-right-width border-right-style border-right-color|initial|inherit",
    skip: true
  },
  { style: "border-right-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-right-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-right-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  }
]