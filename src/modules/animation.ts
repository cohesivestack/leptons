import { Module } from "../module";

const name: string = "Animation";
const symbol: string = "a";

const styles: { [key: string]: string } = {

  //Name
  "n-{name}":    "animation-name: {name};",
  "n-n":         "animation-name: none;",
  "n-none":      "animation-name: none:",
  "n-{keyword}": "animation-name: {keyword};",

  //Duration
  "d-{time$time}":    "animation-duration: {time};",
  "d-{keyword}": "animation-duration: {keyword};",

  //Timing-function
  "tf-l":         "animation-timing-function: linear;",
  "tf-linear":    "animation-timing-function: linear;",
  "tf-e":         "animation-timing-function: ease;",
  "tf-ease":      "animation-timing-function: ease;",
  "tf-e-in":      "animation-timing-function: ease-in;",
  "tf-e-out":     "animation-timing-function: ease-out;",
  "tf-e-inOut":   "animation-timing-function: ease-in-out;",
  "tf-start":     "animation-timing-function: step-start;",
  "tf-end":       "animation-timing-function: step-end;",
  "tf-{keyword}": "animation-timing-function: {keyword};",

  //Delay
  "delay-{time$time}":  "animation-delay: {time};",
  "delay-{keyword}":    "animation-delay: {keyword};",

  //Iteration-count
  "ic-{count$number}": "animation-iteration-count: {count};",
  "ic-i":              "animation-iteration-count: infinite;",
  "ic-infinite":       "animation-iteration-count: infinite;",
  "ic-{keyword}":      "animation-iteration-count: {keyword};",

  //Direction
  "dir-n":                 "animation-direction: normal;",
  "dir-normal":            "animation-direction: normal;",
  "dir-r":                 "animation-direction: reverse;",
  "dir-reverse":           "animation-direction: reverse;",
  "dir-a":                 "animation-direction: alternate;",
  "dir-alternate":         "animation-direction: alternate;",
  "dir-ar":                "animation-direction: alternate-reverse;",
  "dir-alternateReverse":  "animation-direction: alternate-reverse;",
  "dir-{keyword}":         "animation-direction: {keyword};",

  //Fill-mode
  "fm-n":          "animation-fill-mode: none;",
  "fm-none":       "animation-fill-mode: none;",
  "fm-f":          "animation-fill-mode: forwards;",
  "fm-forwards":   "animation-fill-mode: forwards;",
  "fm-b":          "animation-fill-mode: backwards;",
  "fm-backwards":  "animation-fill-mode: backwards;",
  "fm-both":       "animation-fill-mode: both;",
  "fm-{keyword}":  "animation-fill-mode: {keyword};",

  //Play-state
  "ps-p":          "animation-play-state: paused;",
  "ps-paused":     "animation-play-state: paused;",
  "ps-r":          "animation-play-state: running;",
  "ps-running":    "animation-play-state: running;",
  "ps-{keyword}":  "animation-play-state: {keyword};",
}

export const animation = new Module(name, symbol, styles);
