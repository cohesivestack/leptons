import { Module } from '../module';
import { BuildContext } from '../build-context';
import { a, v, s, numberToName } from '../builder-helper';

export const borderWidths: Module = {
  name: 'border-widths',
  prefix: 'border-width',
  shortPrefix: 'bw',
  useShortPrefix: true,
  useShortAttribute: true,
  useShortValue: 'inapplicable',
  initExplicit: true,
  value: [0.0625, 0.125, 0.25, 0.5, 1],

  build: (context: BuildContext) => {
    
    const widths = context.value as number[];

    [
      ['all', 'a', 'border-width'],
      ['top', 't', 'border-top-width'],
      ['bottom', 'b', 'border-bottom-width'],
      ['left', 'l', 'border-left-width'],
      ['right', 'r', 'border-right-width']
    ].forEach(([attribute, shortAttribute, style]) => {
      widths.forEach(width => {
        const value = numberToName(width);

        context.append(
          a(attribute, shortAttribute), v(value), s(`${style}: ${width}rem;`));
      });
    })

  }
}