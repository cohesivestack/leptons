import { CoverInfo } from "../cover-info";

export const animation: CoverInfo[] = [
  { style: "animation",
    values: "name duration timing-function delay iteration-count direction fill-mode play-state",
    skip: true
  },
  { style: "animation-delay",
    values: "{time}|initial|inherit"
  },
  { style: "animation-direction",
    values: "normal|reverse|alternate|alternate-reverse|initial|inherit"
  },
  { style: "animation-duration",
    values: "{time}|initial|inherit"
  },
  { style: "animation-fill-mode",
    values: "none|forwards|backwards|both|initial|inherit"
  },
  { style: "animation-iteration-count",
    values: "{number}|infinite|initial|inherit"
  },
  { style: "animation-name",
    values: "{keyframename}|none|initial|inherit"
  },
  { style: "animation-play-state",
    values: "paused|running|initial|inherit"
  },
  { style: "animation-timing-function",
    values: "linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start/end)|cubic-bezier(n,n,n,n)|initial|inherit",
    skipValues: "steps(int,start/end)|cubic-bezier(n,n,n,n)"
  }
]