export enum LengthType {
  Mm = 'mm', // Milimeters
  Cm = 'cm', // Centimeters
  In = 'in', // Inches
  Px = 'px', // Pixels
  Pt = 'pt', // Points
  Pc = 'pc', // Picas
  Em = 'em', // Relative to Font size of element
  Ex = 'ex', // Relative to Font size of element
  Ch = 'ch', // Relative to width of the "0" (zero) character
  Rem = 'rem', // Relative to Font size of root element
  Vw = 'vw', // Relative to 1% of the width of the viewport
  Vh = 'vh', // Relative to 1% of the height of the viewport
  Vmin = 'vmin', // Relative to 1% of viewport's smaller dimension
  Vmax = 'vmax', // Relative to 1% of viewport's larger dimension
  P = 'p', // Percent %'
}

let regexString = "^n?[0-9]+(?:\.[0-9]+)?(";
let regexTail: string = ""
const utKeys: string[] = Object.keys(LengthType);

utKeys.forEach(ut =>
  regexTail += regexTail.length == 0 ?
    ut.toLowerCase() :
    "|" + ut.toLowerCase());

regexTail += "|%";

const regexpLengthValid = new RegExp(regexString + regexTail + ")?$");

export const isLengthValid = (length: string): boolean => {
  return regexpLengthValid.test(length);
}

export const convertLengthToCss = (length: string, defaultType?: LengthType): string => {
  if (!isLengthValid(length)) {
    throw new Error(`The value ${length} is not valid`);
  }

  let value = length;

  if (/^n?[0-9]+(?:\.[0-9]+)?$/.test(length)) {
    value += defaultType;
  }

  if (/^n/.test(value)) {
    value = value.replace("n", "-");
  }

  if (/p$/.test(value)) {
    value = value.replace("p", "%");
  }

  return value;
}