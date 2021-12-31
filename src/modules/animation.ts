import { Style } from "../style";
import { Module } from "../module";

const name: string = "Animation";
const symbol: string = "a";

const styles: { [key: string]: Style } = {

  //Name
  "n-{name}":    "animation-name: {name};",
  "n-n":         "animation-name: none;",
  "n-none":      "animation-name: none:",
  "n-{keyword}": "animation-name: {keyword};",

  //Duration
  "d-{time}":    "animation-duration: {time};",
  "d-{keyword}": "animation-duration: {keyword};",

  //Timing-function
  "tf-l":                "animation-timing-function: linear;",
  "tf-linear":           "animation-timing-function: linear;",
  "tf-e":                "animation-timing-function: ease;",
  "tf-ease":             "animation-timing-function: ease;",
  "tf-e-in":             "animation-timing-function: ease-in;",
  "tf-e-out":            "animation-timing-function: ease-out;",
  "tf-e-in-out":         "animation-timing-function: ease-in-out;",
  "tf-start":            "animation-timing-function: step-start;",
  "tf-end":              "animation-timing-function: step-end;",

  // TODO function 
  "tf-steps-{length}_start":   "animation-timing-function: steps(int,start|end);",
  "tf-steps-{length}_end":     "animation-timing-function: steps(int,start|end);",
  "tf-cb-":                    "animation-timing-function: cubic-bezier(n,n,n,n);",

  "tf-{keyword}": "animation-timing-function: {keyword};",

  //Delay
  "delay-{time}":    "animation-delay: {time};",
  "delay-{keyword}": "animation-delay: {keyword};",

  //Iteration-count
  "ic-{length}":    "animation-iteration-count: {length};",
  "ic-i":           "animation-iteration-count: infinite;",
  "ic-infinite":    "animation-iteration-count: infinite;",
  "ic-{keyword}":   "animation-iteration-count: {keyword};",

  //Direction
  "dir-n":                 "animation-direction: name;",
  "dir-name":              "animation-direction: name;",
  "dir-r":                 "animation-direction: reverse;",
  "dir-reverse":           "animation-direction: reverse;",
  "dir-a":                 "animation-direction: alternate;",
  "dir-alternate":         "animation-direction: alternate;",
  "dir-ar":                "animation-direction: alternate-reverse;",
  "dir-alternateReverse":  "animation-direction: alternate-reverse;",
  "dir-{keyword}":         "animation-direction: {keyword};",

  //Fill-mode
  "fm-n":          "animation-fill-node: none;",
  "fm-none":       "animation-fill-node: none;",
  "fm-f":          "animation-fill-node: forwards;",
  "fm-forwards":   "animation-fill-node: forwards;",
  "fm-b":          "animation-fill-node: backwards;",
  "fm-backwards":  "animation-fill-node: backwards;",
  "fm-both":       "animation-fill-node: both;",
  "fm-{keyword}":  "animation-fill-node: {keyword};",

  //Play-state
  "ps-p":          "animation-fill-node: paused;",
  "ps-paused":     "animation-fill-node: paused;",
  "ps-r":          "animation-fill-node: running;",
  "ps-running":    "animation-fill-node: running;",
  "ps-{keyword}":  "animation-fill-node: {keyword};",
}

export const animation = new Module(name, symbol, styles);
