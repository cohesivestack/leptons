import { CoverInfo } from "../cover-info";

export const font: CoverInfo[] = [
  { style: "font",
    values: "font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit",
    skip: true
  },
  { style: "font-family",
    values: "{family-name}|{generic-family}|initial|inherit"
  },
  { style: "font-feature-settings",
    values: "normal|{feature-value}",
    skip: true
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
    values: "normal|bold|bolder|lighter|{number}|initial|inherit"
  }
]