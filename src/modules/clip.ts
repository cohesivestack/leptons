import { Style } from "../style";
import { Module } from "../module";

const name: string = "Clip";
const symbol: string = "clip";

const styles: { [key: string]: Style } = {

  // Path
  "p-mb":         "clip-path: margin-box;",
  "p-margin-box": "clip-path: margin-box;",
  "p-bb":         "clip-path: border-box;",
  "p-borderBox":  "clip-path: border-box;",
  "p-pb":         "clip-path: padding-box;",
  "p-paddingBox": "clip-path: padding-box;",
  "p-cb":         "clip-path: content-box;",
  "p-contentBox": "clip-path: content-box;",
  "p-fb":         "clip-path: fill-box;",
  "p-fillBox":    "clip-path: fill-box;",
  "p-sb":         "clip-path: stroke-box;",
  "p-strokeBox":  "clip-path: stroke-box;",
  "p-vb":         "clip-path: view-box;",
  "p-viewBox":    "clip-path: view-box;",
  "p-n":          "clip-path: none;",
  "p-none":       "clip-path: none;",
  "p-{keyword}":  "clip-path: {keyword};"
}

export const clip = new Module(name, symbol, styles);
