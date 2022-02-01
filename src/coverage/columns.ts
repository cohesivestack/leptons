import { CoverageInfo } from "../coverage-info";

export const columns: CoverageInfo[] = [
  { style: "columns",
    values: "auto|{column-width} {column-count}|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "column-count",
    values: "{number}|auto|initial|inherit"
  },
  { style: "column-fill",
    values: "balance|auto|initial|inherit"
  },
  { style: "column-gap",
    values: "{length}|normal|initial|inherit"
  },
  { style: "column-rule",
    values: "column-rule-width column-rule-style column-rule-color|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "column-rule-color",
    values: "{color}|initial|inherit"
  },
  { style: "column-rule-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "column-rule-width",
    values: "medium|thin|thick|{width}|initial|inherit"
  },
  { style: "column-span",
    values: "none|all|initial|inherit"
  },
  { style: "column-width",
    values: "auto|{width}|initial|inherit"
  }
]