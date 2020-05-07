import { Builder } from "./builder";

export type Style = string | ((b: Builder, v: string) => string)