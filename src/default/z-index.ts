import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s, numberToName } from '../builder-helper';

export const zIndex: Module = {
  name: 'z-index',
  prefix: 'z-index',
  shortPrefix: 'z',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  value: [0, 9, 99, 999, 9999],
  initExplicit: true,
  build: (context: BuildContext) => {

    const indexes = context.value as number[];

    indexes.forEach(index => {
      context.append(v(numberToName(index)), s(`z-index: ${index};`));
    });

    context.append(v('max'), s('z-index: 2147483647;'));
  }
}