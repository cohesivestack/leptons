import { Attribute, Value, Style } from "./builder"

export const a: Attribute = (attribute: string, shortAttribute?: string) => {
  return {
    attribute: attribute,
    shortAttribute: shortAttribute
  }
}

export const v: Value = (value: string, shortValue?: string) => {
  return {
    value: value,
    shortValue: shortValue
  }
}

export const s: Style = (style: string) => {
  return {
    style: style
  }
}

export function numberToName(n: number) {
  return n.toString().replace(new RegExp('\\.', 'g'), '_').replace(new RegExp('\\-', 'g'), 'n');
}