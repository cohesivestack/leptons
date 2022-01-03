import { Style } from "../style";
import { Module } from "../module";

const name: string = "Background";
const symbol: string = "bg";

const styles: { [key: string]: Style } = {

  // Position
  "p-lt":           "background-position: left top;",
  "p-leftTop":      "background-position: left top;",
  "p-lc":           "background-position: left center;",
  "p-leftCenter":   "background-position: left center;",
  "p-lb":           "background-position: left bottom;",
  "p-leftBottom":   "background-position: left bottom;",
  "p-rt":           "background-position: right top;",
  "p-rightTop":     "background-position: right top;",
  "p-rc":           "background-position: right center;",
  "p-rightCenter":  "background-position: right center;",
  "p-rb":           "background-position: right bottom;",
  "p-rightBottom":  "background-position: right bottom;",
  "p-ct":           "background-position: center top;",
  "p-centerTop":    "background-position: center top;",
  "p-cc":           "background-position: center center;",
  "p-centerCenter": "background-position: center center;",
  "p-cb":           "background-position: center bottom;",
  "p-centerBottom": "background-position: center bottom;",
  "p-{length2}":    "background-position: {length2};",
  "p-{keyword}":    "background-position: {keyword};",

  // Size
  "s-a":         "background-size: auto;",
  "s-auto":      "background-size: auto;",
  "s-c":         "background-size: cover;",
  "s-cover":     "background-size: cover;",
  "s-contain":   "background-size: contain;",
  "s-{length2}": "background-size: {length2};",
  "s-{keyword}": "background-size: {keyword};",

  // Repeat
  "r-r":         "background-repeat: repeat;",
  "r-repeat":    "background-repeat: repeat;",
  "r-rx":        "background-repeat: repeat-x;",
  "r-repeatX":   "background-repeat: repeat-x;",
  "r-ry":        "background-repeat: repeat-y;",
  "r-repeatY":   "background-repeat: repeat-y;",
  "r-n":         "background-repeat: no-repeat;",
  "r-noRepeat":  "background-repeat: no-repeat;",
  "r-s":         "background-repeat: space;",
  "r-space":     "background-repeat: space;",
  "r-round":     "background-repeat: round;",
  "r-{keyword}": "background-repeat: {keyword};",

  // Origin
  "o-pb":         "background-origin: padding-box;",
  "o-paddingBox": "background-origin: padding-box;",
  "o-bb":         "background-origin: border-box;",
  "o-borderBox":  "background-origin: border-box;",
  "o-cb":         "background-origin: content-box;",
  "o-contentBox": "background-origin: content-box;",
  "o-{keyword}":  "background-origin: {keyword};",

  // Clip
  "clip-pb":         "background-clip: padding-box;",
  "clip-paddingBox": "background-clip: padding-box;",
  "clip-bb":         "background-clip: border-box;",
  "clip-borderBox":  "background-clip: border-box;",
  "clip-cb":         "background-clip: content-box;",
  "clip-contentBox": "background-clip: content-box;",
  "clip-{keyword}":  "background-clip: {keyword};",

  // Attachment
  "a-s":         "background-attachment: scroll;",
  "a-scroll":    "background-attachment: scroll;",
  "a-f":         "background-attachment: fixed;",
  "a-fixed":     "background-attachment: fixed;",
  "a-l":         "background-attachment: local;",
  "a-local":     "background-attachment: local;",
  "a-{keyword}": "background-attachment: {keyword};",

  // Background Color
  "c-t":           "background-color: transparent;",
  "c-transparent": "background-color: transparent;",
  "c-{color}":     "background-color: {color};",
  "c-{keyword}":   "background-color: {keyword};",

  // Blend Mode
  "bm-n":           "background-blend-mode: normal;",
  "bm-normal":      "background-blend-mode: normal;",
  "bm-m":           "background-blend-mode: multiply;",
  "bm-multiply":    "background-blend-mode: multiply;",
  "bm-s":           "background-blend-mode: screen;",
  "bm-screen":      "background-blend-mode: screen;",
  "bm-o":           "background-blend-mode: overlay;",
  "bm-overlay":     "background-blend-mode: overlay;",
  "bm-d":           "background-blend-mode: darken;",
  "bm-darken":      "background-blend-mode: darken;",
  "bm-l":           "background-blend-mode: lighten;",
  "bm-lighten":     "background-blend-mode: lighten;",
  "bm-cd":          "background-blend-mode: color-dodge;",
  "bm-colorDodge":  "background-blend-mode: color-dodge;",
  "bm-saturation":  "background-blend-mode: saturation;",
  "bm-c":           "background-blend-mode: color;",
  "bm-color":       "background-blend-mode: color;",
  "bm-luminosity":  "background-blend-mode: luminosity;",
  "bm-{keyword}":    "background-blend-mode: {keyword};",

}

export const background = new Module(name, symbol, styles);