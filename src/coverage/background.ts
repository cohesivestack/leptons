import { CoverageInfo } from "../coverage-info";

export const background: CoverageInfo[] = [
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
    values: "{url}|none|initial|inherit"
  },
  { style: "background-origin",
    values: "padding-box|border-box|content-box|initial|inherit"
  },
  { style: "background-position",
    values: "{vertical}_{horizontal}|left top|left center|left bottom|right top|right center|right bottom|center top|center center|center bottom|initial|inherit",
    skipValues: "{vertical}_{horizontal}",
    note: "{vertical}_{horizontal} are covered by the properties pbr, pbl, ptr, ptl"
  },
  { style: "background-repeat",
    values: "repeat|repeat-x|repeat-y|no-repeat|initial|inherit"
  },
  { style: "background-size",
    values: "auto|width {width} height {height}|cover|contain|initial|inherit"
  }
]