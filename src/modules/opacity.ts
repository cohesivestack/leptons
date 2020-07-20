import { Style } from "../style";
import { BuilderContext } from "../builder-context";

export const symbol: string = "o";

export const styles: { [key: string]: Style } = {

  "{opacity}": ["opacity: {opacity}",
    (c: BuilderContext, v: string) => {
      if (!/^((1(_0)?)|(0(_[0-9]+)?))$/.test(v)) {
        throw new Error(`The opacity ${v} is not valid`);
      }
      let value = v.replace("_", ".");
    
      return value;
    }
  ]
}