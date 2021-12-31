// import { SearchData } from "./search-data";
import { SearchData } from "./search-data";
import {
  Style,
  StyleFunc,
  StyleItemFunc,
  isStyleString,
  isStyleFunc,
  isStyleItemFunc,
  isValidStyleLiteral,
  isValidStringItem } from "./style";

export class Module {
  private literals: { [key: string]: string } = {};
  private keywords: { [key: string]: string } = {};
  private items: { [key: string]: {itemName: string, style: string } } = {};
  private functions: { [key: string]: StyleFunc } = {};
  private itemFunctions: { [key: string]: { itemName: string, style: StyleItemFunc } } = {};

  private coveredStyles: string[] = [];

  constructor (
    public readonly name: string,
    public readonly symbol: string,
    styles: { [key: string]: Style }) {

    Object.entries(styles).forEach(([key, style]) => {

      if (isStyleString(style)) {
        this.coveredStyles.push(style);

        if (isValidStyleLiteral(key)) {
          this.literals[key] = style;
        } else {
          const [attr, _string] = this.extractItemNameAndAttribute(key);
          if (_string === "keyword") {
            this.keywords[attr] = style;
          } else if (isValidStringItem(key)) {
            this.items[attr] = {
              itemName: _string,
              style: style
            };
          } else {
            throw Error(`String style is invalid "{ ${key}: ${style} }"`)
          }
        }
      } else if (isStyleItemFunc(style)) {
        const itemNameAndAttribute = this.extractItemNameAndAttribute(key);
        this.itemFunctions[itemNameAndAttribute[0]] = { 
          itemName: itemNameAndAttribute[1],
          style: style
        };
      } else if (isStyleFunc(style)) {
        const itemNameAndAttribute = this.extractItemNameAndAttribute(key);
        this.functions[itemNameAndAttribute[0]] = style;
      } else {
        throw Error(`Unknown style type "{ ${key}: ${style} }"`)
      }
    });
  }

  private extractItemNameAndAttribute(key: string): [string, string] {
    const keyParts = key.split('-');
    const attribute = keyParts.length > 1 ? keyParts[0] : "";
    // Remove brackets around - {itemName}
    const itemName = keyParts[keyParts.length - 1].slice(1,-1);

    return [attribute, itemName];
  }

  public getLiteral(key: string): string | undefined {
    return this.literals[key];
  }
  public getKeyword(key: string): string | undefined {
    return this.keywords[key];
  }
  public getItem(key: string): {itemName: string, style: string } | undefined {
    return this.items[key];
  }
  public getFunction(key: string): StyleFunc | undefined {
    return this.functions[key];
  }
  public getItemFunction(key: string): { itemName: string, style: StyleItemFunc } | undefined {
    return this.itemFunctions[key];
  }

  public getSearchData(): SearchData[] {

    const searchData: SearchData[] = [];

    searchData.push(...Object.keys(this.literals).map(className =>
      new SearchData(this.name, this.symbol + "-" + className, this.literals[className])
    ));

    searchData.push(...Object.keys(this.keywords).flatMap(className =>
      ["initial", "inherit", "unset", "revert"].map(keyword => {
        return new SearchData(this.name, `${this.symbol}-${className ? className + "-" : ""}${keyword}`, this.keywords[className].replace(/\{keyword\}/g, keyword))
      })
    ));

    searchData.push(...Object.keys(this.items).map((className) => {
      return new SearchData(this.name, `${this.symbol}-${className ? className + "-" : ""}{${this.items[className].itemName}}`, this.items[className].style)
    }));
    searchData.push(...Object.keys(this.itemFunctions).map((className) => {
      return new SearchData(this.name, `${this.symbol}-${className ? className + "-" : ""}{${this.itemFunctions[className].itemName}}`, "function")
    }));
    searchData.push(...Object.keys(this.functions).map((className) => {
      return new SearchData(this.name, `${this.symbol}-${className}`, "function")
    }));

    return searchData;
  }

  public getCoveredStyles(): string[] {
    return [...this.coveredStyles];
  }
}