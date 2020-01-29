import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';
import { v, s } from '../builder-helper';

export const fontSize: Module = {
  name: 'font-size',
  prefix: 'font-size',
  shortPrefix: 'fs',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  initExplicit: true,
  value: [0.50, 0.75, 1, 1.5, 2, 3, 4, 6, 8],

  build: (context: BuildContext) => {
    const sizes = context.value as number[];

    sizes.forEach(size => {
      context.append(v(numberToName(size)), s(`font-size: ${size}rem;`));
    });
  }

}