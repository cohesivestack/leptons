import { Style } from "../style";
import { Module } from "../module";

const name: string = "Break";
const symbol: string = "break";

const styles: { [key: string]: Style } = {

  // After
  "a-a":           "break-after: auto;",
  "a-auto":        "break-after: auto;",
  "a-all":         "break-after: all;",
  "a-always":      "break-after: always;",
  "a-avoid":       "break-after: avoid;",
  "a-avoidColumn": "break-after: avoid-column;",
  "a-avoidPage":   "break-after: avoid-page;",
  "a-avoidRegion": "break-after: avoid-region;",
  "a-c":           "break-after: column;",
  "a-column":      "break-after: column;",
  "a-l":           "break-after: left;",
  "a-left":        "break-after: left;",
  "a-p":           "break-after: page;",
  "a-page":        "break-after: page;",
  "a-region":      "break-after: region;",
  "a-recto":       "break-after: recto;",
  "a-r":           "break-after: right;",
  "a-right":       "break-after: right;",
  "a-v":           "break-after: verso;",
  "a-verso":       "break-after: verso;",
  "a-{keyword}":   "break-after: {keyword};",

  // Before
  "b-a":           "break-before: auto;",
  "b-auto":        "break-before: auto;",
  "b-all":         "break-before: all;",
  "b-always":      "break-before: always;",
  "b-avoid":       "break-before: avoid;",
  "b-avoidColumn": "break-before: avoid-column;",
  "b-avoidPage":   "break-before: avoid-page;",
  "b-avoidRegion": "break-before: avoid-region;",
  "b-c":           "break-before: column;",
  "b-column":      "break-before: column;",
  "b-l":           "break-before: left;",
  "b-left":        "break-before: left;",
  "b-p":           "break-before: page;",
  "b-page":        "break-before: page;",
  "b-region":      "break-before: region;",
  "b-recto":       "break-before: recto;",
  "b-r":           "break-before: right;",
  "b-right":       "break-before: right;",
  "b-v":           "break-before: verso;",
  "b-verso":       "break-before: verso;",
  "b-{keyword}":   "break-before: {keyword};",

  // Inside
  "i-a":           "break-inside: auto;",
  "i-auto":        "break-inside: auto;",
  "i-all":         "break-inside: all;",
  "i-always":      "break-inside: always;",
  "i-avoid":       "break-inside: avoid;",
  "i-avoidColumn": "break-inside: avoid-column;",
  "i-avoidPage":   "break-inside: avoid-page;",
  "i-avoidRegion": "break-inside: avoid-region;",
  "i-c":           "break-inside: column;",
  "i-column":      "break-inside: column;",
  "i-l":           "break-inside: left;",
  "i-left":        "break-inside: left;",
  "i-p":           "break-inside: page;",
  "i-page":        "break-inside: page;",
  "i-region":      "break-inside: region;",
  "i-recto":       "break-inside: recto;",
  "i-r":           "break-inside: right;",
  "i-right":       "break-inside: right;",
  "i-v":           "break-inside: verso;",
  "i-verso":       "break-inside: verso;",
  "i-{keyword}":   "break-inside: {keyword};",
}

export const break_ = new Module(name, symbol, styles);