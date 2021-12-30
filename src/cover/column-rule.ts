import { CoverInfo } from "../cover-info";

export const columnRule: CoverInfo[] = [
  { style: "column-rule",
    values: "column-rule-width column-rule-style column-rule-color|initial|inherit",
    skip: true
  },
  { style: "column-rule-color",
    values: "{color}|initial|inherit"
  },
  { style: "column-rule-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "column-rule-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  }
]