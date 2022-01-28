import { CoverageInfo } from "../coverage-info";

export const gap: CoverageInfo[] = [
  { style: "gap",
    values: "{row-gap} {column-gap}",
    skip: true,
    note: "Covered by row-gap and column-gap in row and column modules"
  }
]