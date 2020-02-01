import { BuildContext } from "./build-context";

export type AttributePayload = {
  attribute?: string,
  shortAttribute?: string
}

export type ValuePayload = {
  value?: string,
  shortValue?: string
}

export type StylePayload = {
  style?: string
}

export class Atom {
  readonly modulePrefix?: string;
  readonly attribute?: string;
  readonly value?: string;
  readonly style: string;

  constructor(c: BuildContext, payloads: (AttributePayload|ValuePayload|StylePayload)[]) {

    let a: AttributePayload = {};
    let v: ValuePayload = {};
    let s: StylePayload = {};

    payloads.forEach(o => {
      if ((o as AttributePayload).attribute) {
        const _a = o as AttributePayload;
        if (a.attribute || a.shortAttribute) {
          throw Error(`Multiple attribute parts is not allowed: ${a.attribute}, ${_a.attribute}`)
        }
        a = _a; 
      } else if ((o as ValuePayload).value) {
        const _v = o as ValuePayload;
        if (v.value || v.shortValue) {
          throw Error(`Multiple value parts is not allowed: ${v.value}, ${_v.value}`)
        }
        v = _v;
      } else if ((o as StylePayload).style) {
        const _s = o as StylePayload;
        if (s.style) {
          throw Error(`Multiple style parts is not allowed: ${s.style}, ${_s.style}`)
        }
        s = _s;
      }
    });

    if (!v.value) {
      throw Error(`Value is required`);
    }

    if (!s.style) {
      throw Error(`Style is required`);
    }

    this.modulePrefix = c.prefix;

    if (a.attribute) {
      this.attribute = c.useShortAttribute && a.shortAttribute ? a.shortAttribute : a.attribute; 
    } else if (a.shortAttribute) {
      throw Error(`If shortAttribute is set then attribute is required: ${a?.shortAttribute}`);
    }

    this.value = c.useShortValue && v.shortValue ? v.shortValue : v.value;

    this.style = s.style;
  }

  get className(): string {
    let className = '';
    if (this.modulePrefix) className = this.modulePrefix + '-';
    if (this.attribute) className += this.attribute + '-';
    if (this.value) className += this.value;

    return className;
  }
}