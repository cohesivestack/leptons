import { CoverageInfo } from "../coverage-info";

export const transition: CoverageInfo[] = [
  { style: "transition",
    values: "property duration timing-function delay|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "transition-delay",
    values: "{time}|initial|inherit"
  },
  { style: "transition-duration",
    values: "{time}|initial|inherit"
  },
  { style: "transition-property",
    values: "none|all|{property}|initial|inherit",
    skipValues: "{property}",
    note: "{property} could be covered in the future."
  },
  { style: "transition-timing-function",
    values: "linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|initial|inherit",
    skipValues: "steps(int,start|end)|cubic-bezier(n,n,n,n)",
    note: "Skipped values could be covered in the future."
  }
]