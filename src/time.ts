export enum TimeType {
  S = 's', // Seconds
  Ms = 'ms', // Milliseconds
}

let regexString = "^[0-9]+(\.[0-9]+)?(";
let regexTail: string = ""
const utKeys: string[] = Object.keys(TimeType);

utKeys.forEach(ut =>
  regexTail += regexTail.length == 0 ?
    ut.toLowerCase() :
    "|" + ut.toLowerCase());

const regexpTimeValid = new RegExp(regexString + regexTail + ")?$");

export const isTimeValid = (time: string): boolean => {
  return regexpTimeValid.test(time);
}

export const convertTimeToCss = (time: string): string => {
  if (!isTimeValid(time)) {
    throw new Error(`The value ${time} is not valid`);
  }

  return time;
}