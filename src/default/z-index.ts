import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const zIndex: Module = {
  name: 'z-index',
  prefix: 'z',
  useShortName: true,
  value: [0, 9, 99, 999, 9999],
  initExplicit: true,
  build: (context: BuildContext) => {

    const indexes = context.value as number[];

    indexes.forEach(index => {
      context.append(numberToName(index), `z-index: ${index};`);
    });

    context.append('-max', 'z-index: 2147483647;');
  }
}