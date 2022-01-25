import { Module } from "../module";

const name: string = "Mask";
const symbol: string = "mask";

const styles: { [key: string]: string } = {

  // Size
  "s-a":         "mask-size: auto;",
  "s-auto":      "mask-size: auto;",
  "s-c":         "mask-size: contain;",
  "s-contain":   "mask-size: contain;",
  "s-cover":     "mask-size: cover;",
  "s-{length}":  "mask-size: {length};",
  "s-{keyword}": "mask-size: {keyword};",

  // Repeat
  "r-r":         "mask-repeat: repeat;",
  "r-repeat":    "mask-repeat: repeat;",
  "r-rx":        "mask-repeat: repeat-x;",
  "r-repeatX":   "mask-repeat: repeat-x;",
  "r-ry":        "mask-repeat: repeat-y;",
  "r-repeatY":   "mask-repeat: repeat-y;",
  "r-s":         "mask-repeat: space;",
  "r-space":     "mask-repeat: space;",
  "r-round":     "mask-repeat: round;",
  "r-nr":        "mask-repeat: no-repeat;",
  "r-noRepeat":  "mask-repeat: no-repeat;",
  "r-{keyword}": "mask-repeat: {keyword};",

  // Position
  "p-lt":           "mask-position: left top;",
  "p-leftTop":      "mask-position: left top;",
  "p-lc":           "mask-position: left center;",
  "p-leftCenter":   "mask-position: left center;",
  "p-lb":           "mask-position: left bottom;",
  "p-leftBottom":   "mask-position: left bottom;",
  "p-rt":           "mask-position: right top;",
  "p-rightTop":     "mask-position: right top;",
  "p-rc":           "mask-position: right center;",
  "p-rightCenter":  "mask-position: right center;",
  "p-rb":           "mask-position: right bottom;",
  "p-rightBottom":  "mask-position: right bottom;",
  "p-ct":           "mask-position: center top;",
  "p-centerTop":    "mask-position: center top;",
  "p-cc":           "mask-position: center center;",
  "p-centerCenter": "mask-position: center center;",
  "p-cb":           "mask-position: center bottom;",
  "p-centerBottom": "mask-position: center bottom;",
  "p-{lenght2}":    "mask-position: {lenght2};",
  "p-{keyword}":    "mask-position: {keyword};",

  // Origin
  "o-bb":         "mask-origin: border-box;",
  "o-borderBox":  "mask-origin: border-box;",
  "o-cb":         "mask-origin: content-box;",
  "o-contentBox": "mask-origin: content-box;",
  "o-pb":         "mask-origin: padding-box;",
  "o-paddingBox": "mask-origin: padding-box;",
  "o-mb":         "mask-origin: margin-box;",
  "o-marginBox":  "mask-origin: margin-box;",
  "o-fb":         "mask-origin: fill-box;",
  "o-fillBox":    "mask-origin: fill-box;",
  "o-sb":         "mask-origin: stroke-box;",
  "o-strokeBox":  "mask-origin: stroke-box;",
  "o-vb":         "mask-origin: view-box;",
  "o-viewBox":    "mask-origin: view-box;",
  "o-{keyword}":  "mask-origin: {keyword};",

  // Mode
  "m-match-source": "mask-mode: match-source;",
  "m-luminance":    "mask-mode: luminance;",
  "m-alpha":        "mask-mode: alpha;",
  "m-{keyword}":    "mask-mode: {keyword};",

  // Image
  "i-n":         "mask-image: none;",
  "i-none":      "mask-image: none;",
  "i-luminance": "mask-image: luminance;",
  "i-alpha":     "mask-image: alpha;",
  "i-{keyword}": "mask-image: {keyword};",

}

export const mask = new Module(name, symbol, styles);