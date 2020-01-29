import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s, numberToName } from '../builder-helper';

export const maxWidths: Module = {
  name: 'max-widths',
  prefix: 'max-width',
  shortPrefix: 'mw',
  useShortPrefix: true,
  useShortAttribute: true,
  useShortValue: 'inapplicable',
  initExplicit: true,
  minimumValue: {rem: [], percentage: []},
  value: {
    rem: [1,2,3,4,6,8,12,16,24,32,48,64,80],
    percentage: [8.33,10,16.66,20,25,30,33.33,40,50,60,66.66,70,75,80,83.33,90,91.66,100]
  },

  build: (context: BuildContext) => {
    const remMaxWidths = context.value.rem as number[];
    const percentageMaxWidths = context.value.percentage as number[];

    if (remMaxWidths) {
      remMaxWidths.forEach(size => {
        context.append(v(numberToName(size)), s(`max-width: ${size}rem;`));
      });
    }
    
    if (percentageMaxWidths) {
      percentageMaxWidths.forEach(size => {
        context.append(v(`${numberToName(size)}p`), s(`max-width: ${size}%;`));
      });
    }
  }

}