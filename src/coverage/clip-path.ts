import { CoverageInfo } from "../coverage-info";

export const clipPath: CoverageInfo[] = [
  { style: "clip-path",
    values: "{url}|{basic-shape}|margin-box|border-box|padding-box|content-box|fill-box|stroke-box|view-box|none|initial|inherit",
    skipValues: "{basic-shape}",
    note: "The skip values could be covered in the future."
  }
]