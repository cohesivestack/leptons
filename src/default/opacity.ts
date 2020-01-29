import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s, numberToName } from '../builder-helper';

export const opacity: Module = {
  name: 'opacity',
  prefix: 'opacity',
  shortPrefix: 'o',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  value: [0, 0.25, 0.5, 0.75, 1],
  initExplicit: true,

  build: (context: BuildContext) => {

    const opacity = context.value as number[];

    opacity.forEach(opacity => {
      context.append(v(numberToName(opacity)), s(`opacity: ${opacity};`));
    });

  }
}