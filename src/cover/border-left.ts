import { CoverInfo } from "../cover-info";

export const borderLeft: CoverInfo[] = [
  { style: "border-left",
    values: "border-left-width border-left-style border-left-color|initial|inherit",
    skip: true
  },
  { style: "border-left-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-left-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-left-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  }
]