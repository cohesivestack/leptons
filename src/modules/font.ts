import { Module } from "../module";

const name: string = "Font";
const symbol: string = "f";

const styles: { [key: string]: string } = {

  // Family
  "f-{font$font}": "font-family: {font};",
  "f-{keyword}":   "font-family: {keyword};",

  // Size
  "s-s":                "font-size: small;",
  "s-small":            "font-size: small;",
  "s-smaller":          "font-size: smaller;",
  "s-xs":               "font-size: x-small;",
  "s-xSmall":           "font-size: x-small;",
  "s-xxs":              "font-size: xx-small;",
  "s-xxSmall":          "font-size: xx-small;",
  "s-m":                "font-size: medium;",
  "s-medium":           "font-size: medium;",
  "s-l":                "font-size: large;",
  "s-large":            "font-size: large;",
  "s-larger":           "font-size: larger;",
  "s-xl":               "font-size: x-large;",
  "s-xLarge":           "font-size: x-large;",
  "s-xxLarge":          "font-size: xx-large;",
  "s-{length$length}":  "font-size: {length};",
  "s-{keyword}":        "font-size: {keyword};",

  // Style
  "style-n":         "font-style: normal;",
  "style-normal":    "font-style: normal;",
  "style-i":         "font-style: italic;",
  "style-italic":    "font-style: italic;",
  "style-o":         "font-style: oblique;",
  "style-oblique":   "font-style: oblique;",
  "style-{keyword}": "font-style: {keyword};",

  // Kerning
  "k-a":         "font-kerning: auto;",
  "k-auto":      "font-kerning: auto;",
  "k-n":         "font-kerning: none;",
  "k-none":      "font-kerning: none;",
  "k-normal":    "font-kerning: normal;",
  "k-{keyword}": "font-kerning: {keyword};",

  // Stretch 
  "stretch-uc":             "font-stretch: ultra-condensed;",
  "stretch-ultraCondensed": "font-stretch: ultra-condensed;",
  "stretch-ec":             "font-stretch: extra-condensed;",
  "stretch-extraCondensed": "font-stretch: extra-condensed;",
  "stretch-sc":             "font-stretch: semi-condensed;",
  "stretch-semiCondensed":  "font-stretch: semi-condensed;",
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

  // Size Adjust
  "sizeAdjust-n":         "font-size-adjust: none;",
  "sizeAdjust-none":      "font-size-adjust: none;",
  "sizeAdjust-{number}":  "font-size-adjust: {number};",
  "sizeAdjust-{keyword}": "font-size-adjust: {keyword};",

  // Variant
  "v-n":         "font-variant: normal;",
  "v-normal":    "font-variant: normal;",
  "v-sm":        "font-variant: small-caps;",
  "v-smallCaps": "font-variant: small-caps;",
  "v-{keyword}": "font-variant: {keyword};",

  // Variant Caps
  "vc-n":             "font-variant-caps: normal;",
  "vc-normal":        "font-variant-caps: normal;",
  "vc-sm":            "font-variant-caps: small-caps;",
  "vc-smallCaps":     "font-variant-caps: small-caps;",
  "vc-asm":           "font-variant-caps: all-small-caps;",
  "vc-allSmallCaps":  "font-variant-caps: all-small-caps;",
  "vc-pc":            "font-variant-caps: petite-caps;",
  "vc-petiteCaps":    "font-variant-caps: petite-caps;",
  "vc-apc":           "font-variant-caps: all-petite-caps;",
  "vc-allPetiteCaps": "font-variant-caps: all-petite-caps;",
  "vc-u":             "font-variant-caps: unicase;",
  "vc-unicase":       "font-variant-caps: unicase;",
  "vc-tc":            "font-variant-caps: titling-caps;",
  "vc-titlingCaps":   "font-variant-caps: titling-caps;",
  "vc-{keyword}":     "font-variant-caps: {keyword};",

  // Weight
  "w-l":                "font-weight: lighter;",
  "w-lighter":          "font-weight: lighter;",
  "w-n":                "font-weight: normal;",
  "w-normal":           "font-weight: normal;",
  "w-b":                "font-weight: bold;",
  "w-bold":             "font-weight: bold;",
  "w-bolder":           "font-weight: bolder;",
  "w-{weight$number}":  "font-weight: {weight};",
  "w-{keyword}":        "font-weight: {keyword};"
}

export const font = new Module(name, symbol, styles);