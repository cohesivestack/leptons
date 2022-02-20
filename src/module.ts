// import { SearchData } from "./search-data";
import { Builder } from "./builder";
import { Dynamic } from "./dynamic";
import { DynamicError, ModuleError } from "./error";
import { SearchData } from "./search-data";
import {
  isValidStringLiteral,
  isValidStringDynamic } from "./style";

export class Module {
  private literals: { [key: string]: string } = {};
  private keywords: { [key: string]: string } = {};
  private dynamics: { [key: string]: { [params: string]: Dynamic } } = {};
  public readonly errors: ModuleError[] = [];

  private coveredStyles: string[] = [];

  constructor (
    public readonly name: string,
    public readonly symbol: string,
    styles: { [key: string]: string },
    builder?: Builder,
    public readonly hasComponents: boolean = false) {

    Object.entries(styles).forEach(([key, style]) => {

      this.coveredStyles.push(style);

      if (key === "" || isValidStringLiteral(key)) {
        this.literals[key] = style;
      } else {
        const [attr, _params] = this.extractItemNameAndParams(key);
        if (_params === "{keyword}") {
          this.keywords[attr] = style;
        } else if (isValidStringDynamic(key)) {
          if (!this.dynamics[attr]) {
            this.dynamics[attr] = {}
          }
          try {
            this.dynamics[attr][_params] = new Dynamic(_params, style, builder);
          } catch (e) {
            if (e instanceof DynamicError) {
              this.errors.push(new ModuleError(e.message, symbol, name, `${symbol}-${key}`));
            } else {
              throw e;
            }
          }
        } else {
          this.errors.push(new ModuleError(`has an invalid value`, symbol, name, `${symbol}-${key}`));
        }
      }
    });
  }

  private extractItemNameAndParams(key: string): [string, string] {
    const keyParts = key.split('-');
    const attribute = keyParts.length > 1 ? keyParts[0] : "";
    const params = keyParts[keyParts.length - 1];

    return [attribute, params];
  }

  public getLiteral(key: string): string | undefined {
    return this.literals[key];
  }
  public getKeyword(key: string): string | undefined {
    return this.keywords[key];
  }
  public getDynamics(key: string): Dynamic[] | undefined {
    return this.dynamics[key] && Object.values(this.dynamics[key]);
  }

  public getSearchData(): SearchData[] {

    const searchData: SearchData[] = [];

    searchData.push(...Object.keys(this.literals).map(className =>
      new SearchData(this.name, this.symbol + "-" + className, this.literals[className])
    ));

    searchData.push(...Object.keys(this.keywords).flatMap(className =>
      ["initial", "inherit", "unset", "revert"].map(keyword =>
        new SearchData(this.name, `${this.symbol}-${className ? className + "-" : ""}${keyword}`, this.keywords[className].replace(/\{keyword\}/g, keyword))
      )
    ));

    searchData.push(...Object.keys(this.dynamics).flatMap(className =>
      Object.values(this.dynamics[className]).map(dynamic =>
        new SearchData(this.name, `${this.symbol}-${className ? className + "-" : ""}{${dynamic.params}}`, dynamic.style)
      )
    ));

    return searchData;
  }

  public getCoveredStyles(): string[] {
    return [...this.coveredStyles];
  }
}