import { CoverageInfo } from "../coverage-info";

export const flex: CoverageInfo[] = [
  { style: "flex",
    values: "flex-grow flex-shrink flex-basis|auto|initial|inherit",
    skip: true,
    note: "Covered by specific styles"
  },
  { style: "flex-flow",
    values: "flex-direction flex-wrap|initial|inherit",
    skip: true,
    note: "Covered by specific styles"
  },
  { style: "flex-basis",
    values: "{length}|auto|initial|inherit",
  },
  { style: "flex-direction",
    values: "row|row-reverse|column|column-reverse|initial|inherit"
  },
  { style: "flex-grow",
    values: "{number}|initial|inherit"
  },
  { style: "flex-shrink",
    values: "{number}|initial|inherit"
  },
  { style: "flex-wrap",
    values: "nowrap|wrap|wrap-reverse|initial|inherit"
  }
]