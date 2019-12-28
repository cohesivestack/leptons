import { Module } from '../module';
import { BuildContext } from '../build-context';

const defaultSizes: number[] = [0.25, 0.50, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12];

export const padding: Module = {
  name: 'padding',
  prefix: 'f',
  useShortName: 'inapplicable',

  build: (context: BuildContext) => {

    const sizes = context.valueOrDefault(defaultSizes) as number[];

    sizes.forEach(size => {
      const sizeString = size.toString();
      const name = sizeString.replace(new RegExp('.', 'g'), '_');
      context.append(name, 'font-size: ' + sizeString);
    });

  }

}