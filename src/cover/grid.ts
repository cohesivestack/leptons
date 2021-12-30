import { CoverInfo } from "../cover-info";

export const grid: CoverInfo[] = [
  { style: "grid",
    values: "none|grid-template-rows/grid-template-columns|grid-template-areas|grid-template-rows/[grid-auto-flow] grid-auto-columns|[grid-auto-flow] grid-auto-rows/grid-template-columns|initial|inherit",
    skip: true
  },
  { style: "grid-area",
    values: "grid-row-start/grid-column-start/grid-row-end/grid-column-end|itemname",
    skip: true
  },
  { style: "grid-auto-columns",
    values: "auto|max-content|min-content|{length}"
  },
  { style: "grid-auto-flow",
    values: "row|column|dense|row dense|column dense",
    skip: true
  },
  { style: "grid-auto-rows",
    values: "auto|max-content|min-content|{length}"
  },
  { style: "grid-column",
    values: "{grid-column-start}/{grid-column-end}",
    skip: true
  },
  { style: "grid-column-end",
    values: "auto|span n|column-line",
    skip: true
  },
  { style: "grid-column-gap",
    values: "{length}",
    skip: true
  },
  { style: "grid-column-start",
    values: "auto|span n|{column-line}",
    skip: true
  },
  { style: "grid-gap",
    values: "{grid-row-gap}|{grid-column-gap}",
    skip: true
  },
  { style: "grid-row",
    values: "{grid-row-start}|{grid-row-end}",
    skip: true
  },
  { style: "grid-row-end",
    values: "auto|row-line|span n",
    skip: true
  },
  { style: "grid-row-gap",
    values: "{length}",
    skip: true
  },
  { style: "grid-row-start",
    values: "auto|{row-line}",
    skip: true
  },
  { style: "grid-template",
    values: "none|{grid-template-rows} / {grid-template-columns}|grid-template-areas|initial|inherit",
    skip: true
  },
  { style: "grid-template-areas",
    values: "none|{itemnames}",
    skip: true
  },
  { style: "grid-template-columns",
    values: "none|auto|max-content|min-content|{length}|initial|inherit"
  },
  { style: "grid-template-rows",
    values: "none|auto|max-content|min-content|{length}|initial|inherit"
  }
]