export enum SourceType {
  Html = "html",
  React = "react"
}

export type Source = {
  [index: string]: string | string[] |
  { [index: string]: { regexp: string, path: string } }
}
