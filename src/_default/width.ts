import { Builder } from "../builder";
import { Style } from "../style";

export const symbol: string = "w";

export const styles: { [key: string]: Style } = {

  "no-attribute": (b: Builder, v: string) => `width: ${b.convertUnitToCss(v)};`,

}