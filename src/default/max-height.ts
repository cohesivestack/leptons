import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s, numberToName } from '../builder-helper';

export const maxHeight: Module = {
  name: 'max-height',
  prefix: 'max-height',
  shortPrefix: 'maxh',
  useShortPrefix: true,
  useShortAttribute: true,
  useShortValue: 'inapplicable',
  initExplicit: true,
  minimumValue: {rem: []},
  value: {
    rem: [1,2,3,4,6,8,12,16,24,32,48,64,80]
  },

  build: (context: BuildContext) => {
    const remMinHeights = context.value.rem as number[];

    if (remMinHeights) {
      remMinHeights.forEach(size => {
        context.append(v(numberToName(size)), s(`max-height: ${size}rem;`));
      });
    }
  }

}