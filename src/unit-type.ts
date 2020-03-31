export enum UnitType {
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

let regexString = "^[0-9]+([_][0-9]+)*(";
let regexTail: string = ""
const utKeys: string[] = Object.keys(UnitType);

utKeys.forEach(ut =>
  regexTail += regexTail.length == 0 ?
    ut.toLowerCase() :
    "|" + ut.toLowerCase());

const regexpUnitValid = new RegExp(regexString + regexTail + ")*$");

export const isUnitValid = (unit: string): boolean => {
  return regexpUnitValid.test(unit);
}

export const convertUnitToCss = (unit: string, defaultType: UnitType = UnitType.Rem): string => {
  if (!isUnitValid(unit)) {
    throw new Error(`The value ${unit} is not valid`);
  }

  let value = unit.replace("_", ".");

  if (/^[0-9_]*\d$/.test(unit)) {
    value += defaultType;
  }

  return value;
}

export const convertUnitsToCss = (units: string, defaultType?: UnitType, lengths?: number[]): string => {
  defaultType = defaultType || UnitType.Rem;
  lengths = lengths || [4];

  const _units = units.split("X");

  if (lengths.indexOf(_units.length) < 0) {
    throw new Error(`The quantities of values in ${units} is not valid`);
  }

  let output = "";
  _units.forEach(u => {
    if (output.length > 0) {
      output += " ";
    }
    output += convertUnitToCss(u, defaultType);
  })

  return output;
}