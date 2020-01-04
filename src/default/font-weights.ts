import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const fontWeights: Module = {
  name: 'font-weights',
  prefix: 'fw',
  useShortName: 'inapplicable',
  value: [1,2,3,4,5,6,7,8,9],
  initExplicit: true,

  build: (context: BuildContext) => {
    const weights = context.value as number[];

    weights.forEach(weight => {
      context.append(numberToName(weight), `font-weight: ${weight * 100};`);
    });
  }

}