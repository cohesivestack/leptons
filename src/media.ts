import { Module } from './module';

export class Media {
  private _output: string = '';
  private currentModule? : Module;

  constructor(
    public readonly name: string = 'default',
    private breakpoint?: number) { }

  public appendModule(moduleInfo: Module): void {
    const mi = this.currentModule = moduleInfo;

    this._output +=
      '\n/*\n\n' +
      mi.name + (this.name !== 'default' ? ' ' + this.name : '') +
      '\n*********************************************************************/\n\n'
  }

  public append(className: string, body: string): void {
    this._output += className;

    if (this.name !== 'default') this._output += '-' + this.name;

    this._output += ' { ' + body + ' }\n';
  }

  public get output() {
    return this._output;
  }
}