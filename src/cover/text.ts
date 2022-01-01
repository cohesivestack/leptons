import { CoverInfo } from "../cover-info";

export const text: CoverInfo[] = [
  { style: "text-align",
    values: "left|right|center|justify|initial|inherit"
  },
  { style: "text-align-last",
    values: "auto|left|right|center|justify|start|end|initial|inherit"
  },
  { style: "text-decoration",
    values: "text-decoration-line text-decoration-color text-decoration-style|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "text-decoration-color",
    values: "{color}|initial|inherit"
  },
  { style: "text-decoration-line",
    values: "none|underline|overline|line-through|initial|inherit"
  },
  { style: "text-decoration-style",
    values: "solid|double|dotted|dashed|wavy|initial|inherit"
  },
  { style: "text-indent",
    values: "{length}|initial|inherit"
  },
  { style: "text-justify",
    values: "auto|inter-word|inter-character|none|initial|inherit"
  },
  { style: "text-overflow",
    values: "clip|ellipsis|string|initial|inherit"
  },
  { style: "text-shadow",
    values: "valor|initial|inherit",
    skip: true,
    note: "It will be covered with an item collection {shadow}"
  },
  { style: "text-transform",
    values: "none|capitalize|uppercase|lowercase|initial|inherit"
  }
]