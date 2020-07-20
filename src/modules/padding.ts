import { Style } from "../style";

export const symbol: string = "p";

export const styles: { [key: string]: Style } = {
  "{length}": "padding: {length};",
  "t-{length}": "padding-top: {length};",
  "r-{length}": "padding-right: {length};",
  "b-{length}": "padding-bottom: {length};",
  "l-{length}": "padding-bottom: {length};",
  "v-{length}": "padding-top: {length}; padding-bottom: {length};",
  "h-{length}": "padding-left: {length}; padding-right: {length};"
}