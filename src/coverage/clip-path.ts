import { CoverageInfo } from "../coverage-info";

export const clipPath: CoverageInfo[] = [
  { style: "clip-path",
    values: "{clip-source}|{basic-shape}|margin-box|border-box|padding-box|content-box|fill-box|stroke-box|view-box|none|initial|inherit",
    skipValues: "{clip-source}|{basic-shape}",
    note: "The skip values should be covered."
  }
]