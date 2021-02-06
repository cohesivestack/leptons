import { Style } from "../style";
import { BuilderContext } from "../builder-context";
import { Module } from "../module";

const name: string = "Z-Index"
const symbol: string = "z";

const styles: { [key: string]: Style } = {
  "{index}": ["z-index: {index}", (c: BuilderContext, v: string) => {
    if (!/^\d+$/.test(v)) {
      throw new Error(`The z-index ${v} is not valid`);
    }
    return v;
  }],
  "{keyword}": "{keyword}"
}

export const zIndex = new Module(name, symbol, styles);