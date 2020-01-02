import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const widths: Module = {
  name: 'widths',
  prefix: 'w',
  useShortName: true,
  value: {
    rem: [1,2,3,4,6,8,12,16,24,32,48,64,80],
    percentage: [8.33,10,16.66,20,25,30,33.33,40,50,60,66.66,70,75,80,83.33,90,91.66,100]
  },
  initExplicit: true,

  build: (context: BuildContext) => {
    const remWidths = context.value.rem as number[];
    const percentageWidths = context.value.percentage as number[];

    if (remWidths) {
      remWidths.forEach(size => {
        context.append(numberToName(size), `width: ${size}rem;`);
      });
    }
    
    if (percentageWidths) {
      percentageWidths.forEach(size => {
        context.append(`${numberToName(size)}p`, `width: ${size}%;`);
      });
    }

    context.append('-auto', `width: auto;`);
  }

}