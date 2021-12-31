import * as defaultModules from "./modules";

export const exportToJsonString = (): string => {
  return JSON.stringify(Object.values(defaultModules).flatMap(mod =>mod.getSearchData()), null, 4);
}