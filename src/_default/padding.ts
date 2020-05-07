import { Builder } from "../builder";
import { Style } from "../style";

export const symbol: string = "p";

export const styles: { [key: string]: Style } = {

  "no-attribute": (b: Builder, v: string) => `padding: ${b.convertUnitToCss(v)};`,
  t: (b: Builder, v: string) => `padding-top: ${b.convertUnitToCss(v)};`,
  r: (b: Builder, v: string) => `padding-right: ${b.convertUnitToCss(v)};`,
  b: (b: Builder, v: string) => `padding-bottom: ${b.convertUnitToCss(v)};`,
  l: (b: Builder, v: string) => `padding-left: ${b.convertUnitToCss(v)};`,
  v: (b: Builder, v: string) => `padding-top: ${b.convertUnitToCss(v)}; padding-bottom: ${b.convertUnitToCss(v)};`,
  h: (b: Builder, v: string) => `padding-left: ${b.convertUnitToCss(v)}; padding-right: ${b.convertUnitToCss(v)};`,

}