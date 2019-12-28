import { Module } from '../module';
import { BuildContext } from '../build-context';

const defaultSizes: number[] = [0.50, 0.75, 1, 1.5, 2, 3, 4, 6];

export const fontSize: Module = {
  name: 'font-size',
  prefix: 'f',
  useShortName: 'inapplicable',

  build: (context: BuildContext) => {
    const sizes = context.valueOrDefault(defaultSizes) as number[];

    sizes.forEach(size => {
      const sizeString = size.toString();

      context.append(
        sizeString.replace(new RegExp('.', 'g'), '_'),
        'font-size: ' + sizeString);
    });
  }

}