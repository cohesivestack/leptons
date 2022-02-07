const regexpNumberValid = new RegExp("^n?[0-9]+(\.[0-9]+)?$");

export const isNumberValid = (number: string): boolean => {
  return regexpNumberValid.test(number);
}

export const convertNumberToCss = (number: string): string => {
  if (!isNumberValid(number)) {
    throw new Error(`The value ${number} is not valid`);
  }

  if (/^n/.test(number)) {
    number = number.replace("n", "-");
  }

  return number;
}