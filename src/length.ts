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

let regexString = "^[0-9]+(_[0-9]+)*(";
let regexTail: string = ""
const utKeys: string[] = Object.keys(LengthType);

utKeys.forEach(ut =>
  regexTail += regexTail.length == 0 ?
    ut.toLowerCase() :
    "|" + ut.toLowerCase());

const regexpLengthValid = new RegExp(regexString + regexTail + ")*$");

export const isLengthValid = (length: string): boolean => {
  return regexpLengthValid.test(length);
}