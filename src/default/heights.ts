import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const heights: Module = {
  name: 'heights',
  prefix: 'h',
  useShortName: true,
  value: {
    rem: [1,2,3,4,6,8,12,16,24,32],
    percentage: [16.66,40,60,83.33,100],
    viewport: [16.66,40,60,83.33,100]
  },
  initExplicit: true,

  build: (context: BuildContext) => {
    const remHeights = context.value.rem as number[];
    const percentageHeights = context.value.percentage as number[];
    const viewportHeights = context.value.percentage as number[];

    if (remHeights) {
      remHeights.forEach(size => {
        context.append(numberToName(size), `height: ${size}rem;`);
      });
    }

    if (percentageHeights) {
      percentageHeights.forEach(size => {
        context.append(`${numberToName(size)}p`, `height: ${size}%;`);
      });
    }

    if (viewportHeights) {
      viewportHeights.forEach(size => {
        context.append(`${numberToName(size)}vh`, `height: ${size}vh;`);
      });
    }

    context.append('-auto', `height: auto;`);
  }

}