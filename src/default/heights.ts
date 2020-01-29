import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s, numberToName } from '../builder-helper';

export const heights: Module = {
  name: 'heights',
  prefix: 'height',
  shortPrefix: 'h',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  initExplicit: true,
  minimumValue:  {
    rem: [],
    percentage: [],
    viewport: []
  },
  value: {
    rem: [1,2,3,4,6,8,12,16,24,32],
    percentage: [16.66,40,60,83.33,100],
    viewport: [16.66,40,60,83.33,100]
  },

  build: (context: BuildContext) => {
    const remHeights = context.value.rem as number[];
    const percentageHeights = context.value.percentage as number[];
    const viewportHeights = context.value.percentage as number[];

    if (remHeights) {
      remHeights.forEach(size => {
        context.append(v(numberToName(size)), s(`height: ${size}rem;`));
      });
    }

    if (percentageHeights) {
      percentageHeights.forEach(size => {
        context.append(v(`${numberToName(size)}p`), s(`height: ${size}%;`));
      });
    }

    if (viewportHeights) {
      viewportHeights.forEach(size => {
        context.append(v(`${numberToName(size)}vh`), s(`height: ${size}vh;`));
      });
    }

    context.append(v('auto'), s(`height: auto;`));
  }

}