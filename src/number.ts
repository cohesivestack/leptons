const regexpNumberValid = new RegExp("^[0-9]+(\.[0-9]+)?$");

export const isNumberValid = (number: string): boolean => {
  return regexpNumberValid.test(number);
}