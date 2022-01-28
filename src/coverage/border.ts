import { CoverageInfo } from "../coverage-info";

export const border: CoverageInfo[] = [
  { style: "border",
    values: "border-width border-style border-color|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "border-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  },
  { style: "border-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-bottom",
    values: "border-bottom-width border-bottom-style border-bottom-color|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "border-bottom-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-bottom-left-radius",
    values: "{length2}|initial|inherit",
  },
  { style: "border-bottom-right-radius",
    values: "{length2}|initial|inherit",
  },
  { style: "border-bottom-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-bottom-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  },
  { style: "border-image",
    values: "source slice width outset repeat|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "border-image-outset",
    values: "{length4}|initial|inherit"
  },
  { style: "border-image-repeat",
    values: "stretch|repeat|round|space|initial|inherit"
  },
  { style: "border-image-slice",
    values: "{length2}|fill|initial|inherit"
  },
  { style: "border-image-source",
    values: "none|{url}|initial|inherit",
    skip: true,
    note: "It will be covered when URL is supported."
  },
  { style: "border-image-width",
    values: "{length4}|auto|initial|inherit"
  },
  { style: "border-left",
    values: "border-left-width border-left-style border-left-color|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "border-left-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-left-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-left-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  },
  { style: "border-radius",
    values: "{length4}|initial|inherit",
  },
  { style: "border-right",
    values: "border-right-width border-right-style border-right-color|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "border-right-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-right-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-right-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  },
  { style: "border-spacing",
    values: "{length2}|initial|inherit"
  },
  { style: "border-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-top",
    values: "border-top-width border-top-style border-top-color|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "border-top-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "border-top-left-radius",
    values: "{length2}|initial|inherit"
  },
  { style: "border-top-right-radius",
    values: "{length2}|initial|inherit"
  },
  { style: "border-top-style",
    values: "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit"
  },
  { style: "border-top-width",
    values: "medium|thin|thick|{length}|initial|inherit"
  }
]