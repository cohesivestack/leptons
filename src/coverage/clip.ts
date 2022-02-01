import { CoverageInfo } from "../coverage-info";

export const clip: CoverageInfo[] = [
  { style: "clip",
    values: "auto|{shape}|initial|inherit",
    skip: true,
    note: "Won't be covered since it has been deprecated in favour of clip-path."
  }
]