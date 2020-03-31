import { Package } from "../package";
import { Module } from "../module";
import { Breakpoints } from "../breakpoints";
import { ConfigModule } from "../config";
import { Atom } from "../atom";
import { Padding } from "./padding";
import { Margin } from "./margin";
import { FlexBox } from "./flex-box";
import { Display } from "./display";
import { Position } from "./position";
import { Width } from "./width";
import { Colors } from "../colors";
import { Background } from "./background";

const _breakpoints: Breakpoints = {
  M: 48,
  L: 64
};

const _colors: Colors = {
  'lightestRed': '#ffebee',
  'lightRed': '#ef9a9a',
  'red': '#f44336',
  'darkRed': '#d32f2f',
  'darkestRed': '#b71c1c',
  'lightestPink': '#fce4ec',
  'lightPink': '#f48fb1',
  'pink': '#e91e63',
  'darkPink': '#c2185b',
  'darkestPink': '#880e4f',
  'lightestPurple': '#f3e5f5',
  'lightPurple': '#ce93d8',
  'purple': '#9c27b0',
  'darkPurple': '#7b1fa2',
  'darkestPurple': '#4a148c',
  'lightestBlue': '#e3f2fd',
  'lightBlue': '#90caf9',
  'blue': '#2196f3',
  'darkBlue': '#1976d2',
  'darkestBlue': '#0d47a1',
  'lightestGreen': '#e8f5e9',
  'lightGreen': '#a5d6a7',
  'green': '#4caf50',
  'darkGreen': '#388e3c',
  'darkestGreen': '#1b5e20',
  'lightestYellow': '#fffde7',
  'lightYellow': '#fff59d',
  'yellow': '#ffeb3b',
  'darkYellow': '#fbc02d',
  'darkestYellow': '#f57f17',
  'lightestOrange': '#fff3e0',
  'lightOrange': '#ffcc80',
  'orange': '#ff9800',
  'darkOrange': '#f57c00',
  'darkestOrange': '#e65100',
  'lightestBrown': '#efebe9',
  'lightBrown': '#bcaaa4',
  'brown': '#795548',
  'darkBrown': '#5d4037',
  'darkestBrown': '#3e2723',
  'lightestGray': '#fafafa',
  'lightGray': '#eeeeee',
  'gray': '#9e9e9e',
  'darkGray': '#616161',
  'darkestGray': '#212121',
  'white': '#ffffff',
  'black': '#000000'
};

export class DefaultPackage implements Package {
  name: string = "default";

  private modules = new Map<string, Module>();
  
  getAtom(classParts: string[]): Atom | undefined {
    if (this.prefix) {
      if (classParts.length == 0 || classParts[0] !== this.prefix) {
        return undefined;
      }

      classParts = classParts.slice(1);
    }

    if (classParts.length == 0) {
      return undefined;
    }

    const mod = this.modules.get(classParts[0]);
    if (!mod) {
      return undefined;
    }

    if (classParts[0] !== mod.symbol) {
      return undefined;
    }

    const cssClass = classParts.join("-");

    classParts = [...classParts];

    let breakpoint: string | undefined;

    if (/^[A-Z]+$/.test(classParts[classParts.length - 1])) {
      breakpoint = classParts.pop();

      if (!this.breakpoints[breakpoint as string]) {
        throw new Error(`The breakpoint ${breakpoint} used in the class ${cssClass} doesn't exists`);
      }
    }

    return mod.getAtom(classParts, cssClass, breakpoint);
  }

  getBreakpoint(symbol: string): number | undefined {
    return this.breakpoints[symbol];
  }

  constructor(
    public readonly breakpoints: Breakpoints = _breakpoints,
    public readonly colors: Colors = _colors,
    readonly prefix?: string,
    private configModules?: ConfigModule[]) {

    this.modules
      .set('bg', new Background())
      .set('d', new Display())
      .set('fb', new FlexBox())
      .set('m', new Margin())
      .set('p', new Padding())
      .set('pos', new Position())
      .set('w', new Width());
  }
}