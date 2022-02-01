import { CoverageInfo } from "../coverage-info";

export const grid: CoverageInfo[] = [
  { style: "grid",
    values: "none|{grid-template-rows}/{grid-template-columns}|{grid-template-areas}|{grid-template-rows}/{[grid-auto-flow]} {grid-auto-columns}|[{grid-auto-flow}] {grid-auto-rows}/{grid-template-columns}|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "grid-area",
    values: "grid-row-start/grid-column-start/grid-row-end/grid-column-end|itemname",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "grid-auto-columns",
    values: "auto|max-content|min-content|{length}"
  },
  { style: "grid-auto-flow",
    values: "row|column|dense|row dense|column dense",
  },
  { style: "grid-auto-rows",
    values: "auto|max-content|min-content|{length}"
  },
  { style: "grid-column",
    values: "{grid-column-start}/{grid-column-end}",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "grid-column-end",
    values: "auto|{span n}|{number}",
    skipValues: "{span n}",
    note: "{span n} will be supported in the future."
  },
  { style: "grid-column-gap",
    values: "{length}|initial|inherit",
    skip: true,
    note: "Covered by column module"
  },
  { style: "grid-column-start",
    values: "auto|{span n}|{number}",
    skipValues: "{span n}",
    note: "{span n} will be supported in the future."
  },
  { style: "grid-gap",
    values: "{grid-row-gap}|{grid-column-gap}",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "grid-row",
    values: "{grid-row-start}|{grid-row-end}",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "grid-row-end",
    values: "auto|{number}|{span n}",
    skipValues: "{span n}",
    note: "{span n} will be supported in the future."
  },
  { style: "grid-row-gap",
    values: "{length}",
    skip: true,
    note: "Covered by row module"
  },
  { style: "grid-row-start",
    values: "auto|{number}",
  },
  { style: "grid-template",
    values: "none|{grid-template-rows} / {grid-template-columns}|grid-template-areas|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "grid-template-areas",
    values: "none|{template}",
  },
  { style: "grid-template-columns",
    values: "none|auto|max-content|min-content|{length}|initial|inherit",
    note: "Currently Leptons only support one length for all columns. In the future a type like {length...} could support an undefined array of params."
  },
  { style: "grid-template-rows",
    values: "none|auto|max-content|min-content|{length}|initial|inherit",
    note: "Currently Leptons only support one length for all rows. In the future a type like {length...} could support an undefined array of params."
  }
]