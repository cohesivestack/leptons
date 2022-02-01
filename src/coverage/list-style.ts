import { CoverageInfo } from "../coverage-info";

export const listStyle: CoverageInfo[] = [
  { style: "list-style",
    values: "list-style-type list-style-position list-style-image|initial|inherit",
    skip: true,
    note: "Covered by specific styles"
  },
  { style: "list-style-image",
    values: "none|{url}|initial|inherit"
  },
  { style: "list-style-position",
    values: "inside|outside|initial|inherit"
  },
  { style: "list-style-type",
    values: "disc|armenian|circle|cjk-ideographic|decimal|decimal-leading-zero|georgian|hebrew|hiragana|hiragana-iroha|katakana|katakana-iroha|lower-alpha|lower-greek|lower-latin|lower-roman|none|square|upper-alpha|upper-greek|upper-latin|upper-roman|initial|inherit"
  }
]