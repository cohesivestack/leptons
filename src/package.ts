import { Breakpoints } from "./breakpoints";
import { Colors } from "./colors";
import { ConfigModule } from "./config";
import { Atom } from "./atom";
import { UnitType } from "./unit-type";

export type ConfigOptions = {
  prefix?: string,
  unit?: UnitType,
  breakpoints?: Breakpoints,
  colors?: Colors
}

export abstract class Package {
  readonly breakpoints: Breakpoints;
  readonly colors: Colors;
  readonly unit: UnitType;
  readonly prefix?: string;

  constructor(readonly name: string, config: ConfigOptions) {
    this.prefix = config.prefix;
    this.breakpoints = config.breakpoints || {};
    this.unit = config.unit || UnitType.Rem;
    this.colors = config.colors || {};
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