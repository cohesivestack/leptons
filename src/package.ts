import { Breakpoints } from "./breakpoints";
import { ConfigModule } from "./config";

export interface Package {
  readonly name: string

  getClass(className: string): string
  init(breakpoints: Breakpoints, prefix?: string, modules?: ConfigModule[]): void
}