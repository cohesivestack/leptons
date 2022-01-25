import { Module } from "../module";

const name: string = "Image";
const symbol: string = "img";

const styles: { [key: string]: string } = {

  // Rendering
  "r-a":           "image-rendering: auto;",
  "r-auto":        "image-rendering: auto;",
  "r-s":           "image-rendering: smooth;",
  "r-smooth":      "image-rendering: smooth;",
  "r-hq":          "image-rendering: high-quality;",
  "r-highQuality": "image-rendering: high-quality;",
  "r-ce":          "image-rendering: crisp-edges;",
  "r-crispEdges":  "image-rendering: crisp-edges;",
  "r-p":           "image-rendering: pixelated;",
  "r-pixelated":   "image-rendering: pixelated;",
  "r-{keyword}":   "image-rendering: {keyword};"
}

export const image = new Module(name, symbol, styles);