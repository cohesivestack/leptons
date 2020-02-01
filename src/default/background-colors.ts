import { Module } from '../module';
import { BuildContext } from '../build-context';
import { colors } from './colors'
import { DependencyType } from '../dependency';
import { v, s } from '../builder-helper';


export const backgroundColors: Module = {
  name: 'background-colors',
  prefix: 'background-color',
  shortPrefix: 'bgc',
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
      context.append(v(name), s(`background-color: ${colorsContext.value[name]};`));
    });
  }

}