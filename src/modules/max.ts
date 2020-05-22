import { Builder } from "../builder";
import { Style } from "../style";

export const symbol: string = "max";

export const styles: { [key: string]: Style } = {

  //Width
  "w": (b: Builder, v: string) => `max-width: ${b.convertUnitToCss(v)};`,

  //Height
  "h": (b: Builder, v: string) => `max-height: ${b.convertUnitToCss(v)};`,

}