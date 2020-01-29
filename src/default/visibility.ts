import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s } from '../builder-helper';

export const visibility: Module = {
  name: 'visibility',
  prefix: 'visibility',
  shortPrefix: 'v',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: true,
  value: 'default',
  build: (context: BuildContext) => {

    context
      .append(v('visible', 'v'), s('visibility: visible;'))
      .append(v('hidden', 'h'), s('visibility: hidden;'))
      .append(v('collapse', 'c'), s('visibility: collapse;'));

  }
}