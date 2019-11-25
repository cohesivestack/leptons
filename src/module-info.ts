import { Builder } from "./builder";

export type ModuleInfo = {
  name: string,
  prefix: string,
  useShortName: boolean,
  build: (builder: Builder) => void
}