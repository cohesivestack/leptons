import * as defaultModules from "./modules";

export class SearchData {
  constructor(
    public moduleName: string,
    public className: string,
    public style: string) { }

  public static exportToJsonString(): string {
    return JSON.stringify(Object.values(defaultModules).flatMap(mod =>mod.getSearchData()), null, 4);
  }
}