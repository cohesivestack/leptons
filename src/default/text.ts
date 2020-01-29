import { Module } from '../module';
import { BuildContext } from '../build-context';
import { a, v, s } from '../builder-helper';

export const text: Module = {
  name: 'text',
  prefix: 'text',
  shortPrefix: 't',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: true,
  value: 'default',

  build: (context: BuildContext) => {

    context
      .append(a('align', 'a'), v('left', 'l'), s('text-align: left;'))
      .append(a('align', 'a'), v('right', 'r'), s('text-align: right;'))
      .append(a('align', 'a'), v('center', 'c'), s('text-align: center;'))
      .append(a('align', 'a'), v('justify', 'j'), s('text-align: justify;'))
      .append(a('decoration', 'd'), v('underline', 'u'), s('text-decoration: underline;'))
      .append(a('decoration', 'd'), v('strike', 's'), s('text-decoration: line-through;'))
      .append(a('decoration', 'd'), v('overline', 'o'), s('text-decoration: overline;'))
      .append(a('decoration', 'd'), v('none', 'n'), s('text-decoration: none;'))

  }
}