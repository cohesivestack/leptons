import { Module } from '../module';
import { BuildContext } from '../build-context';
import { colors } from './colors'
import { DependencyType } from '../dependency';


export const borderColors: Module = {
  name: 'border-colors',
  prefix: 'bc',
  useShortName: 'inapplicable',
  dependencies: [
    {
      module: colors,
      type: DependencyType.Strict
    }
  ],

  build: (context: BuildContext) => {
    if (context.value !== 'default') {
      throw Error("borderColors module only accept default value")
    }

    const colorsContext = context.getDependencyContext(colors);

    Object.keys(colorsContext.value).forEach(name => {
      context.append(name, 'border-color: ' + colorsContext.value[name]);
    });
  }

}