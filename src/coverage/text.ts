import { CoverageInfo } from "../coverage-info";

export const text: CoverageInfo[] = [
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
    values: "clip|ellipsis|{string}|initial|inherit",
    skipValues: "{string}",
    note: "No plans to support {string} for now."
  },
  { style: "text-shadow",
    values: "{shadow}|initial|inherit"
  },
  { style: "text-transform",
    values: "none|capitalize|uppercase|lowercase|initial|inherit"
  }
]