import { Style } from "../style";
import { BuilderContext } from "../builder-context";
import { Module } from "../module";

const name: string = "Font";
const symbol: string = "f";

const styles: { [key: string]: Style } = {

  // Family
  "f-{font}":    "font-family: {font};",
  "f-{keyword}": "font-family: {keyword};",

  // Size
  "s-{length}":  "font-size: {length};",
  "s-{keyword}": "font-size: {keyword};",

  // Style
  "style-n":         "font-style: normal;",
  "style-normal":    "font-style: normal;",
  "style-i":         "font-style: italic;",
  "style-italic":    "font-style: italic;",
  "style-o":         "font-style: oblique;",
  "style-oblique":   "font-style: oblique;",
  "style-{keyword}": "font-style: {keyword};",

  // Stretch 
  "stretch-uc":             "font-stretch: ultra-condensed;",
  "stretch-ultraCondensed": "font-stretch: ultra-condensed;",
  "stretch-ec":             "font-stretch: extra-condensed;",
  "stretch-extraCondensed": "font-stretch: extra-condensed;",
  "stretch-c":              "font-stretch: condensed;",
  "stretch-condensed":      "font-stretch: condensed;",
  "stretch-n":              "font-stretch: normal;",
  "stretch-normal":         "font-stretch: normal;",
  "stretch-se":             "font-stretch: semi-expanded;",
  "stretch-semiExpanded":   "font-stretch: semi-expanded;",
  "stretch-e":              "font-stretch: expanded;",
  "stretch-expanded":       "font-stretch: expanded;",
  "stretch-ee":             "font-stretch: extra-expanded;",
  "stretch-extraExpanded":  "font-stretch: extra-expanded;",
  "stretch-ue":             "font-stretch: ultra-expanded;",
  "stretch-ultraExpanded":  "font-stretch: ultra-expanded;",
  "stretch-{keyword}":      "font-stretch: {keyword};",

  // Variant
  "v-n":         "font-variant: normal;",
  "v-normal":    "font-variant: normal;",
  "v-sm":        "font-variant: small-caps;",
  "v-smallCaps": "font-variant: small-caps;",
  "v-{keyword}": "font-variant: {keyword};",

  // Weight
  "w-b":         "font-weight: 700;",
  "w-bold":      "font-weight: 700;",
  "w-n":         "font-weight: 400;",
  "w-normal":    "font-weight: 400;",
  "w-{weight}":  ["font-weight: {weight};", (c: BuilderContext, v: string) => c.convertNumberPerHundrerToCss(v)],
  "w-{keyword}": "font-weight: {keyword};"
}

export const font = new Module(name, symbol, styles);