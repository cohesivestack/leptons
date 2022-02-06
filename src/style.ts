import { Dynamic } from "./dynamic";

const regexLiteral = /^[a-z][a-zA-Z]*(-[a-z][a-zA-Z0-9]*){0,2}$/;
const regexDynamic = /^([a-z][a-zA-Z]*-){0,2}(\{[a-z\$\:][\$\:a-zA-Z0-9]*\})(_\{[\$\:a-z][\$\:a-zA-Z0-9]*\})*$/;
const regexKeyword = /^([a-z][a-zA-Z]*-){0,2}(initial|inherit|unset|revert)$/

export function isValidStringLiteral(literal: string): boolean {
  return regexLiteral.test(literal);
}

export function isValidStringDynamic(dynamic: string): boolean {
  return regexDynamic.test(dynamic);
}

export function isValidStringKeyword(keyword: string): boolean {
  return regexKeyword.test(keyword);
}