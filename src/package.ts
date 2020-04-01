import { Breakpoints } from "./breakpoints";
import { Colors } from "./colors";
import { ConfigModule } from "./config";
import { Atom } from "./atom";
import { UnitType } from "./unit-type";
import { Fonts } from "./fonts";

export type ConfigOptions = {
  prefix?: string,
  unit?: UnitType,
  breakpoints?: Breakpoints,
  colors?: Colors,
  fonts?: Fonts
}

export abstract class Package {
  readonly breakpoints: Breakpoints;
  readonly colors: Colors;
  readonly fonts: Fonts;
  readonly unit: UnitType;
  readonly prefix?: string;

  constructor(readonly name: string, config: ConfigOptions) {
    this.prefix = config.prefix;
    this.breakpoints = config.breakpoints || {};
    this.unit = config.unit || UnitType.Rem;
    this.colors = config.colors || {};
    this.fonts = config.fonts || {};
  }

  abstract getAtom(classParts: string[]): Atom | undefined

  abstract getBreakpoint(symbol: string): number | undefined
}

export interface InitPackage
{
  (config: ConfigOptions): Package
};

export interface GetPackage
{
  (): Package
};