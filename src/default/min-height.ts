import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s, numberToName } from '../builder-helper';

export const minHeight: Module = {
  name: 'min-height',
  prefix: 'min-height',
  shortPrefix: 'mh',
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
        context.append(v(numberToName(size)), s(`min-height: ${size}rem;`));
      });
    }
  }

}