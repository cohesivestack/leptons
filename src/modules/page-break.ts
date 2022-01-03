import { Style } from "../style";
import { Module } from "../module";

const name: string = "Page Break";
const symbol: string = "pb";

const styles: { [key: string]: Style } = {

  // Inside
  "i-a":         "page-break-inside: auto;",
  "i-auto":      "page-break-inside: auto;",
  "i-avoid":     "page-break-inside: avoid;",
  "i-{keyword}": "page-break-inside: {keyword};",

  // After
  "a-a":         "page-break-after: auto;",
  "a-auto":      "page-break-after: auto;",
  "a-always":    "page-break-after: always;",
  "a-avoid":     "page-break-after: avoid;",
  "a-l":         "page-break-after: left;",
  "a-left":      "page-break-after: left;",
  "a-r":         "page-break-after: right;",
  "a-right":     "page-break-after: right;",
  "a-{keyword}": "page-break-after: {keyword};",

  // Before
  "b-a":         "page-break-before: auto;",
  "b-auto":      "page-break-before: auto;",
  "b-always":    "page-break-before: always;",
  "b-avoid":     "page-break-before: avoid;",
  "b-l":         "page-break-before: left;",
  "b-left":      "page-break-before: left;",
  "b-r":         "page-break-before: right;",
  "b-right":     "page-break-before: right;",
  "b-{keyword}": "page-break-before: {keyword};"
}

export const pageBreak = new Module(name, symbol, styles);