import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s } from '../builder-helper';

export const cursors: Module = {
  name: 'cursors',
  prefix: '',
  useShortPrefix: 'inapplicable',
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  value: 'default',

  build: (context: BuildContext) => {

    context.append(v('pointer'), s('cursor: pointer;'));

  }
}