import { Module } from '../module';
import { BuildContext } from '../build-context';

export const cursors: Module = {
  name: 'cursors',
  prefix: '',
  useShortName: true,
  value: 'default',
  build: (context: BuildContext) => {

    context
      .append('pointer', 'cursor: pointer;');

  }
}