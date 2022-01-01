import { CoverInfo } from "../cover-info";

export const flex: CoverInfo[] = [
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
    values: "{number}|auto|initial|inherit",
    skipValues: "value"
  },
  { style: "flex-direction",
    values: "row|row-reverse|column|column-reverse|initial|inherit",
    skipValues: "value"
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