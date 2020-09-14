export enum SourceType {
  Html = "html",
  React = "react"
}

export const sourceTypes: {[index: string]: RegExp} = {
  html: /(?:class|className)\=(?:\"(.+?)\"|'.+?')/g,
  react: /(?:className)\=(?:\"(.+?)\"|'.+?')/g
}

// Source with 'content' property is used for Testing. So it's not possible to set
// 'content' in a configuration file
export type Source = {
  [index: string]:
    string |
    string[] |
    { content: string } |
    { regexp: string, path: string | string[] } |
    { regexp: string, content: string }
}

export function isSourceWithContent(source: Source, sourceName: string): boolean {
  return (source[sourceName] as any)["content"] ? true : false;
}

export function isSourceWithRegexp(source: Source, sourceName: string): boolean {
  return (source[sourceName] as any)["regexp"] ? true : false;
}

export function isSourceWithRegexpAndPath(source: Source, sourceName: string): boolean {
  return isSourceWithRegexp(source, sourceName) && (source[sourceName] as any)["path"] ? true : false;
}