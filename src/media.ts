import { Atom } from './atom';
import { Package } from './package';
import { convertUnitToCss } from "./unit-type";

export class Media {
  private modules: Map<string, Atom[]> = new Map<string, Atom[]>();

  constructor(private pkg: Package, private breakpoint?: string) { }

  addAtom(atom: Atom): void {
    if (this.breakpoint && !atom.breakpoint) {
      throw new Error(`The "${atom.cssClass}" atom doesn't belong to any breakpoint, but this is being added to "${this.breakpoint}" breakpoint`);
    } else if (!this.breakpoint && atom.breakpoint) {
      throw new Error(`The "${atom.cssClass}" atom belongs to "${atom.breakpoint}" breakpoint, but this is being added to "default"`);
    } else if (this.breakpoint !== atom.breakpoint) {
      throw new Error(`The "${atom.cssClass}" atom belongs to "${atom.breakpoint}" breakpoint, but this is being added to "${this.breakpoint}" breakpoint`);
    }

    if (!this.modules.has(atom.module.symbol)) {
      this.modules.set(atom.module.symbol, []);
    }
    this.modules.get(atom.module.symbol)?.push(atom);
  }

  build() {
    let cssString = "";
    let tabSpace = "";

    if (this.breakpoint) {
      const breakpointValue = this.pkg.getBreakpoint(this.breakpoint);
      if (!breakpointValue)
        throw new Error(`The Breakpoint "${this.breakpoint}" doesn't exist`);

      cssString += `@media screen and (min-width: ${convertUnitToCss(breakpointValue.toString())}) {\n`;
      tabSpace = "  ";
    }

    const modules = new Map([...this.modules.entries()].sort());

    modules.forEach((atoms, moduleName) => {
      atoms.sort((a,b) => a.cssClass > b.cssClass ? 1 : -1 ).forEach(atom => {
        cssString += `${tabSpace}.${atom.cssClass} { ${atom.cssValue} }\n`
      });
    });

    if (this.breakpoint && cssString.charAt(0) === '@' ) {
      cssString += "}\n";
    }

    return cssString;
  }
}