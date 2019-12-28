import { Module } from "./module";
import { Breakpoints } from "./breakpoints";

export type Package = {
  name: string,
  prefix?: string,
  includeAll: boolean
  useShortName: boolean,
  breakpoints: Breakpoints,
  modules: Module[],
}