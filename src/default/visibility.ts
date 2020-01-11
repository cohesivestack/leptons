import { Module } from '../module';
import { BuildContext } from '../build-context';

export const visibility: Module = {
  name: 'visibility',
  prefix: 'v',
  useShortName: true,
  value: 'default',
  build: (context: BuildContext) => {

    context
      .appendWithShort('visible', 'v', 'visibility: visible;')
      .appendWithShort('hidden', 'h', 'visibility: hidden;')
      .appendWithShort('collapse', 'c', 'visibility: collapse;');

  }
}