import * as Helper from "./builder-helper";
import { isConfigErrors, ConfigError, Config } from "./config";

export class Builder {
  private config?: Config;

  private build(plainConfig: any): string {

    // Validate config
    if (isConfigErrors(plainConfig)) {
      const errors = plainConfig as ConfigError[];

      let reportErrors = '';
      errors.forEach(e => {
        reportErrors += '  ' + e.path + ' -> ' + e.message + '\n';
      })

      throw Error("Errors parsing plain object:\n" + reportErrors);
    }

    const config = this.config as Config;

    Helper.extractClassesFromSource(config.source);

    return ""
  }
}