import { Module } from '../module';
import { BuildContext } from '../build-context';
import { a, v, s, numberToName } from '../builder-helper';

export const margin: Module = {
  name: 'margin',
  prefix: 'margin',
  shortPrefix: 'm',
  useShortPrefix: true,
  useShortAttribute: true,
  useShortValue: 'inapplicable',
  initExplicit: true,
  value: [0.25, 0.50, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12],

  build: (context: BuildContext) => {

    const sizes = context.value as number[];

    [
      ['all', 'a', (s: string) => `margin: ${s};`],
      ['vertical', 'v', (s: string) => `margin-top: ${s}; margin-bottom: ${s};`],
      ['horizontal', 'h', (s: string) => `margin-left: ${s}; margin-right: ${s};`],
      ['top', 't', (s: string) => `margin-top: ${s};`],
      ['bottom', 'b', (s: string) => `margin-bottom: ${s};`],
      ['left', 'l', (s: string) => `margin-left: ${s};`],
      ['right', 'r', (s: string) => `margin-right: ${s};`]
    ].forEach(values => {
      const attribute = values[0] as string;
      const shortAttribute = values[1] as string;
      const style = values[2] as (s: string) => string;

      context.append(
        a(attribute, shortAttribute), v('auto'), s(style('auto')))

      sizes.forEach(size => {
        const nameSize = numberToName(size);

        context.append(
          a(attribute, shortAttribute), v(nameSize), s(style(size + 'rem')))
      });
    });

  }

}