import { CoverInfo } from "../cover-info";

export const textDecoration: CoverInfo[] = [
  { style: "text-decoration",
    values: "text-decoration-line text-decoration-color text-decoration-style|initial|inherit",
    skip: true
  },
  { style: "text-decoration-color",
    values: "{color}|initial|inherit"
  },
  { style: "text-decoration-line",
    values: "none|underline|overline|line-through|initial|inherit"
  },
  { style: "text-decoration-style",
    values: "solid|double|dotted|dashed|wavy|initial|inherit"
  }
]