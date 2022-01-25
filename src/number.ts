const regexpNumberValid = new RegExp("^[0-9]+(\.[0-9]+)?$");

export const isNumberValid = (number: string): boolean => {
  return regexpNumberValid.test(number);
}

export const convertNumberToCss = (number: string): string => {
  if (!isNumberValid(number)) {
    throw new Error(`The value ${number} is not valid`);
  }
  return number;
}