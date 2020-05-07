import { Builder } from "../builder";
import { Style } from "../style";

export const symbol: string = "z";

export const styles: { [key: string]: Style } = {

  "no-attribute": (b: Builder, v: string) => `z-index: ${validateZIndex(v)};`,

}

function validateZIndex(v: string) {
  if (!/^\d+$/.test(v)) {
    throw new Error(`The z-index ${v} is not valid`);
  }

  return v;
}