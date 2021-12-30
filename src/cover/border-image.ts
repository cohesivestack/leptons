import { CoverInfo } from "../cover-info";

export const borderImage: CoverInfo[] = [
  { style: "border-image",
    values: "source slice width outset repeat|initial|inherit",
    skip: true
  },
  { style: "border-image-outset",
    values: "{length}|{number}|initial|inherit",
    skip: true
  },
  { style: "border-image-repeat",
    values: "stretch|repeat|round|space|initial|inherit",
    skip: true
  },
  { style: "border-image-slice",
    values: "{number}|fill|initial|inherit",
    skip: true
  },
  { style: "border-image-source",
    values: "none|{image}|initial|inherit",
    skip: true
  },
  { style: "border-image-width",
    values: "{length}|{number}|auto|initial|inherit",
    skip: true
  }
]