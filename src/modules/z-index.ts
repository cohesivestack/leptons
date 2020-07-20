import { Style } from "../style";
import { BuilderContext } from "../builder-context";

export const symbol: string = "z";

export const styles: { [key: string]: Style } = {
  "{index}": ["z-index: {index}", (c: BuilderContext, v: string) => {
    if (!/^\d+$/.test(v)) {
      throw new Error(`The z-index ${v} is not valid`);
    }
    return v;
  }]
}