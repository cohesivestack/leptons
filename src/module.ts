import { Builder } from './builder';
import { Breakpoints } from './breakpoints';
import { BuildContext } from './build-context';
import { Dependency } from './dependency';

export type Module = {
  name: string,
  prefix: string,
  useShortName: 'inapplicable' | boolean,
  breakpoints?: Breakpoints,
  dependencies?: Dependency[],
  build: (buildContext: BuildContext) => void
}

export type ModuleValue = 'default' | any;