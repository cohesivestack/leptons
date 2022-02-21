import { ErrorObject } from "ajv";
import chalk from 'chalk';

export interface LeptonsError {
  get message(): string;
}

export class SchemaError implements LeptonsError {
  public readonly _message: string;

  constructor(ajvError: ErrorObject) {
    let message = ajvError.message;
    if (ajvError.params.additionalProperty) {
      message = `/${ajvError.params.additionalProperty} is an unknown property`
    } else if (ajvError.params.allowedValues) {
      message = `${ajvError.instancePath} must be one of: ${ajvError.params.allowedValues.map((v: string) => v).join(",")}`
    } else if (ajvError.params.type) {
      if (ajvError.instancePath === "") {
        message = "The config file is not a valid Leptons config file"
      } else {
        message = `${ajvError.instancePath} must be ${ajvError.params.type}`
      }
    }
    this._message = message || `Unknown error in config file ${ajvError.schemaPath}, ${ajvError.instancePath}, ${ajvError.keyword}`;
  }

  get message(): string {
    return this._message;
  }
}

export class AtomError implements LeptonsError {
  private _message: string;

  constructor(
    public readonly className: string,
    public readonly description: string,
    public readonly example?: string) {
    this._message = `"${className}" "${this.description}"`;
    if (example) {
      this._message = `${this._message}. E.g. ${example}`
    }
  }

  get message(): string {
    return this._message;
  }
}

export class DynamicError implements LeptonsError {
  constructor(public readonly message: string) {
  }
}

export interface InputError extends LeptonsError {
}

export function isInputError(error: any): error is InputError {
  return (error as InputError).message !== undefined;
}

export class SourceError implements InputError {
  private _message: string = "";
  public readonly source: string
  public readonly artifact?: string
  public readonly description: string

  constructor(
    private file: string,
    error: AtomError) {
    this.source = file;
    this.artifact = error.className;
    this.description = error.description;

    this._message = `${this.description}. Source: ${this.source}`;

    if (this.artifact) {
      this._message = `"${this.artifact}" ${this._message}`;
    }
  }

  get message(): string {
    return this._message;
  }
}

export class ConfigError implements InputError {
  private _message: string = "";

  constructor(
    public readonly description: string,
    public readonly path?: string) {

    this._message = description;

    if (this.path) {
      this._message = `${this.path} ${this._message}`;
    }
  }

  public static createFromAtomError(path: string, atomError: AtomError): ConfigError {
    return new ConfigError(atomError.description, `${path}/${atomError.className}`);
  }

  get message(): string {
    return this._message;
  }
}

export class ModuleError implements InputError {
  private _message: string = "";

  constructor(
    public readonly description: string,
    public readonly symbol: string,
    public readonly name?: string,
    public readonly className?: string) {

    this._message = "Error in Module";

    this._message = this.description;
    if (this.className) {
      this._message = `${this.className} ${this.message}`
    }

    if (this.name) {
      this._message = `${this._message}. Module "${this.name}" (${this.symbol})`;
    } else {
      this._message = `${this._message}. Module with symbol "${this.symbol}"`;
    }
  }

  get message(): string {
    return this._message;
  }
}

export function printOutErrors(errors: LeptonsError[]) {
  if (errors.findIndex(e => e instanceof SchemaError) > -1) {
    printOutSchemaErrors(errors.filter(e => e instanceof SchemaError) as SchemaError[]);
  }

  if (errors.findIndex(e => e instanceof ConfigError) > -1) {
    printOutConfigErrors(errors.filter(e => e instanceof ConfigError) as ConfigError[]);
  }

  if (errors.findIndex(e => e instanceof SourceError) > -1) {
    printOutSourceErrors(errors.filter(e => e instanceof SourceError) as SourceError[]);
  }
}

export function printOutSchemaErrors(errors: SchemaError[]) {
  if (errors.length > 0) {
    console.error(chalk.red("\nFatal errors in your Leptons config file:"))
    console.group();
    errors.forEach(e => console.error(chalk.red(`* ${e.message}`)))
    console.groupEnd();
  }
}

export function printOutConfigErrors(errors: ConfigError[]) {
  if (errors.length > 0) {
    console.error(chalk.yellow.red("\nErrors in your Leptons config file:"));
    console.group();
    errors.forEach(e => console.error(chalk.yellow.red(`* ${e.path}: ${e.description}`)));
    console.groupEnd();
  }
}

export function printOutSourceErrors(errors: SourceError[]) {
  if (errors.length > 0) {
    console.error(chalk.yellow.red("\nErrors in your Leptons source files:"));
    console.group();
    errors.forEach(e => console.error(chalk.yellow.red(`* ${e.artifact ? e.artifact + ": " : ""}${e.description}. Source: ${e.source}`)));
    console.groupEnd();
  }
}