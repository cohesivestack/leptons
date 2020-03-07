export type Module = {
  name: string,
  prefix: string,
  value: ModuleValue,
  getClass: (className: string) => string
}

export type ModuleValue = 'default' | any;