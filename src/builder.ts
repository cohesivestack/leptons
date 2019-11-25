import fs from 'fs';
import yaml from 'js-yaml';
import { ModuleInfo } from './module-info';
import { display } from './display';
import { flexBox } from './flex-box';

class Media {
  private _output: string = '';
  private currentModule? : ModuleInfo;

  constructor(
    public readonly name: string = 'default',
    private breakpoint?: number) { }

  public appendModule(moduleInfo: ModuleInfo): void {
    const mi = this.currentModule = moduleInfo;

    this._output +=
      '\n/*\n\n' + mi.name + (this.name !== 'default' ? ' ' + this.name : '') +
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

export class Builder {

  private config: any;
  private medias = new Map<string, Media>();
  private modules = new Map<string, ModuleInfo>();
  private currentModule?: ModuleInfo;

  constructor(configPath: string) {
    this.config = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));

    this.medias.set('default', new Media());

    const breakpoints = new Map<string, number>(
      Object.entries(this.config.breakpoints));

    breakpoints.forEach((value, name) =>
      this.medias.set(name, new Media(name, value)));

    this.initializeModules();
  }

  private initializeModules() {
    this
      .registerModule(display)
      .registerModule(flexBox);
  }

  public registerModule(moduleInfo: ModuleInfo): Builder {
    this.modules.set(moduleInfo.name, moduleInfo);
    return this;
  }

  public append(name: string, shortName: string, body: string): Builder {
    if (!this.currentModule)
      throw Error('Missing currentModule');

    const className = '.' + this.currentModule.prefix + shortName;
    this.medias.forEach(m => m.append(className, body));
    return this;
  }

  public build(): string {
    this.modules.forEach((mi, name) => {
      this.currentModule = mi;
      this.medias.forEach(m => m.appendModule(mi));
      mi.build(this);
    });

    let output = '';
    this.medias.forEach(m => output += m.output);

    return output;
  }


}