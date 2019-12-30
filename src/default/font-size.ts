import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const fontSize: Module = {
  name: 'font-size',
  prefix: 'f',
  useShortName: 'inapplicable',
  value: [0.50, 0.75, 1, 1.5, 2, 3, 4, 6],
  initExplicit: true,

  build: (context: BuildContext) => {
    const sizes = context.value as number[];

    sizes.forEach(size => {
      context.append(numberToName(size), `font-size: ${size}rem;`);
    });
  }

}