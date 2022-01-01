import { CoverInfo } from "../cover-info";

export const transition: CoverInfo[] = [
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
    skipValues: "{property}"
  },
  { style: "transition-timing-function",
    values: "linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|initial|inherit",
    skipValues: "steps(int,start|end)|cubic-bezier(n,n,n,n)"
  }
]