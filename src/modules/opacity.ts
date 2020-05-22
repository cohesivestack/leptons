import { Builder } from "../builder";
import { Style } from "../style";

export const symbol: string = "o";

export const styles: { [key: string]: Style } = {

  "no-attribute": (b: Builder, v: string) => `opacity: ${convertOpacityToCss(v)};`,

}

function convertOpacityToCss(v: string) {
  if (!/^((1(_0)?)|(0(_[0-9]+)?))$/.test(v)) {
    throw new Error(`The opacity ${v} is not valid`);
  }
  let value = v.replace("_", ".");

  return value;
}