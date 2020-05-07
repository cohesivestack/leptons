import { Builder } from "../builder";
import { Style } from "../style";

export const symbol: string = "h";

export const styles: { [key: string]: Style } = {

  "no-attribute": (b: Builder, v: string) => `height: ${b.convertUnitToCss(v)};`,

}