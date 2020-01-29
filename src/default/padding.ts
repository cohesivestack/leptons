import { Module } from '../module';
import { BuildContext } from '../build-context';
import { a, v, s, numberToName } from '../builder-helper';

export const padding: Module = {
  name: 'padding',
  prefix: 'padding',
  shortPrefix: 'p',
  useShortPrefix: true,
  useShortAttribute: true,
  useShortValue: 'inapplicable',
  initExplicit: true,
  value: [0.25, 0.50, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12],

  build: (context: BuildContext) => {
    const sizes = context.value as number[];

    [
      ['all', 'a', (s: number) => `padding: ${s}rem;`],
      ['vertical', 'v', (s: number) => `padding-top: ${s}rem; padding-bottom: ${s}rem;`],
      ['horizontal', 'h', (s: number) => `padding-left: ${s}rem; padding-right: ${s}rem;`],
      ['top', 't', (s: number) => `padding-top: ${s}rem;`],
      ['bottom', 'b', (s: number) => `padding-bottom: ${s}rem;`],
      ['left', 'l', (s: number) => `padding-left: ${s}rem;`],
      ['right', 'r', (s: number) => `padding-right: ${s}rem;`]
    ].forEach(values => {
      const attribute = values[0] as string;
      const shortAttribute = values[1] as string;
      const style = values[2] as (s: number) => string;

      sizes.forEach(size => {
        const sizeName = numberToName(size);
        context.append(
          a(attribute, shortAttribute), v(sizeName), s(style(size)));
      });
    })
  }

}