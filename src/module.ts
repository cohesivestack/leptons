import { Breakpoints } from './breakpoints';
import { BuildContext } from './build-context';
import { Dependency } from './dependency';

export type Module = {
  name: string,
  prefix: string,
  shortPrefix?: string,
  useShortPrefix: 'inapplicable' | boolean,
  useShortAttribute: 'inapplicable' | boolean,
  useShortValue: 'inapplicable' | boolean,
  breakpoints?: Breakpoints,
  dependencies?: Dependency[],
  initExplicit?: boolean,
  value: ModuleValue,
  minimumValue?: ModuleValue,
  build: (buildContext: BuildContext) => void
}

export type ModuleValue = 'default' | any;