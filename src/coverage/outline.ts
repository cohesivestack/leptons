import { CoverageInfo } from "../coverage-info";

export const outline: CoverageInfo[] = [
  { style: "outline",
    values: "outline-width outline-style outline-color|initial|inherit",
    skip: true,
    note: "Covered by specific styles"
  },
  { style: "outline-color",
    values: "invert|{color}|initial|inherit"
  },
  { style: "outline-offset",
    values: "{length}|initial|inherit"
  },
  { style: "outline-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "outline-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  }
]