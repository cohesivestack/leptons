import { Module } from './module';

export class Media {
  private modules = new Map<Module, string>();
  private classes = "";

  constructor(
    private name?: string,
    private breakpoint?: number) { }

  public append(mod: Module, className: string, body: string): void {

    let output = this.modules.get(mod);

    let indent = '';
    if (this.name) indent = '  ';

    if (!output)
      output = indent +  Media.wrapDescription(
        'Module: ' + mod.name + (this.name ? ' - breakpoint: ' + this.name : ''));

    output += indent + className;

    if (this.name) output += '-' + this.name;

    output +=  ' { ' + body + ' }\n';

    this.modules.set(mod, output);
  }

  public appendClass(className: string, body: string): void {
    let indent = '';
    if (this.name) indent = '  ';

    if (!this.classes)
      this.classes = indent +  Media.wrapDescription(
        'Custom Classes' + (this.name ? ' - breakpoint: ' + this.name : ''));

    this.classes += indent + className;

    if (this.name) this.classes += '-' + this.name;

    this.classes +=  ' { ' + body + ' }\n';
  }

  public get output() {
    let output = ''

    if (this.name)
      output += Media.wrapDescription('Breakpoint: ' + this.name);

    if (this.name)
      output += '@media screen and (min-width: ' + this.breakpoint + 'rem) {\n\n';

    this.modules.forEach(o => output += o);

    output += this.classes;

    if (this.name) output += '\n}\n';

    return output;
  }

  private static wrapDescription(description: string) : string {
    return '/* ' + description + ' */\n'
  }
}