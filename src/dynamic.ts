import { Builder } from "./builder"
import { convertLengthToCss, isLengthValid } from "./length"
import { convertNumberToCss, isNumberValid } from "./number"
import { convertTimeToCss, isTimeValid } from "./time"

export enum DynamicParamType {
  Length = "length",
  Number = "number",
  Color = "color",
  Shadow = "shadow",
  Time = "time",
  Animation = "animation",
  Font = "font",
  Url = "url",
  Any = "any",
  Custom = "custom"
}

export class DynamicParam {
  public readonly name: string
  private type!: DynamicParamType
  private collection?: string

  constructor(param: string, private builder?: Builder) {
    let pair: string[] = [];
    let specificType: string | undefined;
    this.name = "";

    if (param.trim().length < 3 ||
      param.trim()[0] !== "{" ||
      param.trim()[param.trim().length - 1] !== "}") {
      throw `Invalid parameter type for "${param}"`;
    }

    param = param.trim().substring(1, param.trim().length - 1);

    if (param.indexOf("$") > -1) {
      pair = param.split("$");
    } else if (param.indexOf(":") > -1) {
      pair = param.split(":");
      this.type = DynamicParamType.Custom;
    } else {
      this.name = param;
      this.type = DynamicParamType.Any;
    }

    if (this.type !== DynamicParamType.Any) {
      if (pair.length !== 2) {
        throw `Invalid parameter type for "${param}"`;
      }

      this.name = pair[0];
      specificType = pair[1];

      if (specificType.length === 0 || !specificType.match(/^[a-z]+[a-zA-Z0-9]*$/)) {
        throw `Invalid parameter type for "${param}"`;
      }

      if (this.type === DynamicParamType.Custom) {
        if (!builder) {
          throw `Custom type "${specificType}" requires a builder.`;
        }

        if (!builder.hasCollection(specificType)) {
          throw `There is not a collection with the name :"${specificType}."`;
        }
        this.collection = specificType;

      } else { // Is System type
        if (!(Object.values(DynamicParamType) as string[]).includes(specificType) ||
          specificType === DynamicParamType.Custom.toString() ||
          specificType === DynamicParamType.Any.toString()) {
          throw `Invalid system type $"${specificType}"`;
        }
        this.type = specificType as DynamicParamType;
      }
    }

    if (!this.name.match(/^[a-z]+[a-zA-Z0-9]*$/)) {
      throw `Invalid name for "${param}"`;
    }
  }

  isMatching(param: string): boolean {
    if (!this.builder) {
      throw `Calling the function isMatching() requires a builder. Set a builder with the constructor or use setBuilder().`;
    }
    switch (this.type) {
      case DynamicParamType.Length:
        return isLengthValid(param);
      case DynamicParamType.Number:
        return isNumberValid(param);
      case DynamicParamType.Time:
        return isTimeValid(param);
      case DynamicParamType.Font:
        return this.builder.hasFont(param);
      case DynamicParamType.Color:
        return this.builder.hasColor(param);
      case DynamicParamType.Shadow:
        return this.builder.hasShadow(param);
      case DynamicParamType.Animation:
        return this.builder.hasAnimation(param);
      case DynamicParamType.Url:
        return this.builder.hasUrl(param);
      case DynamicParamType.Custom:
        return this.collection !== undefined && this.builder.getCollection(this.collection)[param] !== undefined;
      case DynamicParamType.Any:
        return param.trim().length > 0;
      default:
        throw `Invalid type "${this.type}"`;
    }
  }

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  parse(param: string): string {
    if (!this.builder) {
      throw `Calling the function parse() requires a builder. Set a builder with the constructor or use setBuilder().`;
    }
    switch (this.type) {
      case DynamicParamType.Length:
        return convertLengthToCss(param, this.builder.lengthType);
      case DynamicParamType.Number:
        return convertNumberToCss(param);
      case DynamicParamType.Time:
        return convertTimeToCss(param);
      case DynamicParamType.Font:
        return this.builder.getFont(param);
      case DynamicParamType.Color:
        return this.builder.getColor(param);
      case DynamicParamType.Shadow:
        return this.builder.getShadow(param);
      case DynamicParamType.Animation:
        return this.builder.getAnimation(param);
      case DynamicParamType.Url:
        return this.builder.getUrl(param);
      case DynamicParamType.Any:
        if (param.trim().length == 0) {
          throw `The type "${this.type}" can't not be empty`  
        }
        return param;
      case DynamicParamType.Custom:
        if (!this.collection) {
          throw `The type "${this.type}" is not a collection`  
        }
        if (!this.builder.getCollection(this.collection)[param]) {
          throw `The value "${param}" doesn't exist in the collection "${this.collection}"`
        };
        return this.builder.getCollection(this.collection)[param];
      default:
        throw `Invalid type "${this.type}"`;
    }
  } 
}

export class Dynamic {
  private dynamicParams: DynamicParam[];
  public readonly params: string;
  public readonly style: string;


  constructor(params: string, style: string, builder?: Builder) {
    this.params = params;
    this.style = style;
    this.dynamicParams = params.split("_").map(p => new DynamicParam(p, builder));
  }

  isMatching(params: string): boolean {
    const _params = params.split("_");

    if (_params.length !== this.dynamicParams.length) {
      return false;
    }

    for (let i = 0; i < _params.length; i++) {
      if (!this.dynamicParams[i].isMatching(_params[i])) {
        return false;
      }
    }

    return true;
  }

  parse(params: string): string {
    const _params = params.split("_");

    if (_params.length !== this.dynamicParams.length) {
      throw `The number of params don't match "${this.params}"`; 
    }
    let template = this.style;

    for (let i = 0; i < _params.length; i++) {

      template = template.replace(
        new RegExp(`{${this.dynamicParams[i].name}}`, 'g'),
        this.dynamicParams[i].parse(_params[i]))
    }

    return template;
  }

  setBuilder(builder: Builder) {
    this.dynamicParams.forEach(dp => dp.setBuilder(builder));
  }
}
