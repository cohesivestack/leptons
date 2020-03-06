import * as globby from "globby";
import * as fs from "fs";
import { isConfigErrors, ConfigError, Config } from "./config";

export class Builder {

  private config?: Config;

  public static extractClassesFromSource(source: string[]): string[] {
    const classes: string[] = [];

    globby
      .sync(source)
      .forEach(f => classes.push(...Builder.extractClassesFromFile(f)));

    return classes;
  }

  public static extractClassesFromFile(file: string): string[] {
    return Builder.extractClassesFromContent(fs.readFileSync(file, "utf8"));
  }

  public static extractClassesFromContent(content: string): string[] {
    const regexAttribute = /class\=(?:\"(.+?)\"|'.+?')/g;
    let attributeMatches: RegExpExecArray | null;
    const classNames: string[] = [];

    const regexClass = /^[A-Za-z0-9-_]+$/;
    
    while (attributeMatches = regexAttribute.exec(content)) {
      const entries = attributeMatches[1].split(" ");

      for (let i = 0; i < entries.length; i++) {
        let classMatch = regexClass.exec(entries[i]);
        if (classMatch) {
          classNames.push(classMatch[0]);
        }
      }
    }

    return classNames;
  }

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

    Builder.extractClassesFromSource(config.source);

    return ""
  }
}