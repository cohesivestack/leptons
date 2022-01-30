import { Module } from "../module";

const name: string = "Transition";
const symbol: string = "trans";

const styles: { [key: string]: string } = {

  // Property
  "p-n":         "transition-property: none;",
  "p-none":      "transition-property: none;",
  "p-a":         "transition-property: all;",
  "p-all":       "transition-property: all;",
  "p-{keyword}": "transition-property: {keyword};",

  // Delay
  "d-{time$time}":    "transition-duration: {time};",
  "d-{keyword}":      "transition-duration: {keyword};",

  // Delay
  "delay-{time$time}":    "transition-delay: {time};",
  "delay-{keyword}":      "transition-delay: {keyword};",

  // Timing Function
  "tf-l":           "transition-timing-function: linear;",
  "tf-linear":      "transition-timing-function: linear;",
  "tf-e":           "transition-timing-function: ease;",
  "tf-ease":        "transition-timing-function: ease;",
  "tf-ei":          "transition-timing-function: ease-in;",
  "tf-easeIn":      "transition-timing-function: ease-in;",
  "tf-eo":          "transition-timing-function: ease-out;",
  "tf-easeOut":     "transition-timing-function: ease-out;",
  "tf-eio":         "transition-timing-function: ease-in-out;",
  "tf-easeInOut":   "transition-timing-function: ease-in-out;",
  "tf-ss":          "transition-timing-function: step-start;",
  "tf-tepStart":    "transition-timing-function: step-start;",
  "tf-se":          "transition-timing-function: step-end;",
  "tf-stepEnd":     "transition-timing-function: step-end;",
  "tf-{keyword}":   "transition-timing-function: {keyword};"

}

export const transition = new Module(name, symbol, styles);
