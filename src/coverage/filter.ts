import { CoverageInfo } from "../coverage-info";

export const filter: CoverageInfo[] = [
  { style: "filter",
    values: "none|blur()|brightness()|contrast()|drop-shadow()|grayscale()|hue-rotate()|invert()|opacity()|saturate()|sepia()|url()|initial|inherit",
    skip: true,
    note: "This could be covered in the future."
  }
]