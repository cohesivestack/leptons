import { Style } from "../style";
import { Module } from "../module";

const name: string = "Mix";
const symbol: string = "mix";

const styles: { [key: string]: Style } = {

  // Blend Mode
  "bm-normal":     "mix-blend-mode: normal;",
  "bm-m":          "mix-blend-mode: multiply;",
  "bm-multiply":   "mix-blend-mode: multiply;",
  "bm-screen":     "mix-blend-mode: screen;",
  "bm-o":          "mix-blend-mode: overlay;",
  "bm-overlay":    "mix-blend-mode: overlay;",
  "bm-d":          "mix-blend-mode: darken;",
  "bm-darken":     "mix-blend-mode: darken;",
  "bm-l":          "mix-blend-mode: lighten;",
  "bm-lighten":    "mix-blend-mode: lighten;",
  "bm-cd":         "mix-blend-mode: color-dodge;",
  "bm-colorDodge": "mix-blend-mode: color-dodge;",
  "bm-cb":         "mix-blend-mode: color-burn;",
  "bm-colorBurn":  "mix-blend-mode: color-burn;",
  "bm-difference": "mix-blend-mode: difference;",
  "bm-e":          "mix-blend-mode: exclusion;",
  "bm-exclusion":  "mix-blend-mode: exclusion;",
  "bm-h":          "mix-blend-mode: hue;",
  "bm-hue":        "mix-blend-mode: hue;",
  "bm-s":          "mix-blend-mode: saturation;",
  "bm-saturation": "mix-blend-mode: saturation;",
  "bm-c":          "mix-blend-mode: color;",
  "bm-color":      "mix-blend-mode: color;",
  "bm-luminosity": "mix-blend-mode: luminosity;",
  "{keyword}":     "mix-blend-mode: {keyword};",
}

export const mix = new Module(name, symbol, styles);