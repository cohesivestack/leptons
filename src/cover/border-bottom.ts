import { CoverInfo } from "../cover-info";

export const borderBottom: CoverInfo[] = [

  { style: "border-bottom",
    values: "border-bottom-width border-bottom-style border-bottom-color|initial|inherit",
    skip: true
  },
  { style: "border-bottom-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-bottom-left-radius",
    values: "{length}|% [length/%]|initial|inherit",
    skipValues: "% [length/%]"
  },
  { style: "border-bottom-right-radius",
    values: "{length}|% [length/%]|initial|inherit",
    skipValues: "% [length/%]"
  },
  { style: "border-bottom-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-bottom-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  }
]