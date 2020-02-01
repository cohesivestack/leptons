import { Module } from '../module';
import { BuildContext } from '../build-context';
import { colors } from './colors'
import { DependencyType } from '../dependency';
import { v, s } from '../builder-helper';

export const borderColors: Module = {
  name: 'border-colors',
  prefix: 'border-color',
  shortPrefix: 'bc',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  dependencies: [
    {
      module: colors,
      type: DependencyType.Strict
    }
  ],
  value: 'default',

  build: (context: BuildContext) => {
    const colorsContext = context.getDependencyContext(colors.name);

    Object.keys(colorsContext.value).forEach(name => {
      context.append(v(name), s(`border-color: ${colorsContext.value[name]};`));
    });
  }

}