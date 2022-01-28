import { CoverageInfo } from "../coverage-info";

export const boxShadow: CoverageInfo[] = [
  { style: "box-shadow",
    values: "none|{h-offset v-offset blur spread color}|inset|initial|inherit",
    skip: true,
    note: "It will be covered with an item collection {shadow}"
  }
]