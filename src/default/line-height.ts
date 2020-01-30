import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';
import { v, s } from '../builder-helper';

export const lineHeight: Module = {
  name: 'line-height',
  prefix: 'line-height',
  shortPrefix: 'lh',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  initExplicit: true,
  value: [1, 1.125, 1.25, 1.5, 1.75, 2],

  build: (context: BuildContext) => {
    const sizes = context.value as number[];

    sizes.forEach(size => {
      context.append(v(numberToName(size)), s(`line-height: ${size};`));
    });
  }

}