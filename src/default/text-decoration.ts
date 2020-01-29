import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s } from '../builder-helper';

export const textDecoration: Module = {
  name: 'text-decoration',
  prefix: 'text-decoration',
  shortPrefix: 'td',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: true,
  value: 'default',

  build: (context: BuildContext) => {

    context
      .append(v('underline', 'u'), s('text-decoration: underline;'))
      .append(v('strike', 's'), s('text-decoration: line-through;'))
      .append(v('overline', 'o'), s('text-decoration: overline;'))
      .append(v('none', 'n'), s('text-decoration: none;'))

  }
}