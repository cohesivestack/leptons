import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s, numberToName } from '../builder-helper';

export const fontWeights: Module = {
  name: 'font-weights',
  prefix: 'font-weight',
  shortPrefix: 'fw',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  initExplicit: true,
  value: [1,2,3,4,5,6,7,8,9],

  build: (context: BuildContext) => {
    const weights = context.value as number[];

    weights.forEach(weight => {
      context.append(v(numberToName(weight)), s(`font-weight: ${weight * 100};`));
    });
  }

}