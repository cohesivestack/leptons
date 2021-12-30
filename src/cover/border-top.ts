import { CoverInfo } from "../cover-info";

export const borderTop: CoverInfo[] = [
  { style: "border-top",
    values: "border-top-width border-top-style border-top-color|initial|inherit",
    skip: true
  },
  { style: "border-top-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-top-left-radius",
    values: "{length}|initial|inherit"
  },
  { style: "border-top-right-radius",
    values: "{length}|initial|inherit"
  },
  { style: "border-top-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-top-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  }
]