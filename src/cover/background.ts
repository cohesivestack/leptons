import { CoverInfo } from "../cover-info";

export const background: CoverInfo[] = [
  { style: "background",
    values: "bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "background-attachment",
    values: "scroll|fixed|local|initial|inherit"
  },
  { style: "background-blend-mode",
    values: "normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity"
  },
  { style: "background-clip",
    values: "border-box|padding-box|content-box|initial|inherit"
  },
  { style: "background-color",
    values: "{color}|transparent|initial|inherit"
  },
  { style: "background-image",
    values: "{url}|none|initial|inherit",
    skip: true,
    note: "It will be covered when URL is supported."
  },
  { style: "background-origin",
    values: "padding-box|border-box|content-box|initial|inherit"
  },
  { style: "background-position",
    values: "{length2}|left top|left center|left bottom|right top|right center|right bottom|center top|center center|center bottom|initial|inherit"
  },
  { style: "background-repeat",
    values: "repeat|repeat-x|repeat-y|no-repeat|initial|inherit"
  },
  { style: "background-size",
    values: "auto|{length}|cover|contain|initial|inherit"
  }
]