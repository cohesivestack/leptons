import { CoverageInfo } from "../coverage-info";

export const font: CoverageInfo[] = [
  { style: "font",
    values: "font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit",
    skip: true,
    note: "Covered by specific styles."
  },
  { style: "font-family",
    values: "{font}|initial|inherit"
  },
  { style: "font-feature-settings",
    values: "normal|{feature-value}",
    skip: true,
    note: "No plans to cover this for now"
  },
  { style: "font-kerning",
    values: "auto|normal|none"
  },
  { style: "font-size",
    values: "medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|{length}|initial|inherit"
  },
  { style: "font-size-adjust",
    values: "{number}|none|initial|inherit"
  },
  { style: "font-stretch",
    values: "ultra-condensed|extra-condensed|condensed|semi-condensed|normal|semi-expanded|expanded|extra-expanded|ultra-expanded|initial|inherit"
  },
  { style: "font-style",
    values: "normal|italic|oblique|initial|inherit"
  },
  { style: "font-variant",
    values: "normal|small-caps|initial|inherit"
  },
  { style: "font-variant-caps",
    values: "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps|initial|inherit"
  },
  { style: "font-weight",
    values: "normal|bold|bolder|lighter|{weight}|initial|inherit"
  }
]