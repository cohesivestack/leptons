import { Module } from '../module';
import { BuildContext } from '../build-context';
import { colors } from './colors'
import { DependencyType } from '../dependency';


export const backgroundColors: Module = {
  name: 'background-colors',
  prefix: 'bgc',
  useShortName: 'inapplicable',
  value: 'default',
  dependencies: [
    {
      module: colors,
      type: DependencyType.Strict
    }
  ],

  build: (context: BuildContext) => {
    const colorsContext = context.getDependencyContext(colors);

    Object.keys(colorsContext.value).forEach(name => {
      context.append(`-${name}`, `background-color: ${colorsContext.value[name]};`);
    });
  }

}