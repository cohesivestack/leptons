import { Module } from '../module';
import { BuildContext } from '../build-context';
import { a, v, s } from '../builder-helper';

export const display: Module = {
  name: 'display',
  prefix: 'display',
  shortPrefix: 'd',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: true,
  value: 'default',

  build: (context: BuildContext) => {

    context
      .append(v('none', 'n'), s('display: none;'))
      .append(v('inline', 'i'), s('display: inline;'))
      .append(v('block', 'b'), s('display: block;'))
      .append(v('flex', 'f'), s('display: flex;'))
      .append(v('inline-block', 'ib'), s('display: inline-block;'))
      .append(v('inline-table', 'it'), s('display: inline-table;'))
      .append(v('table', 't'), s('display: table;'))
      .append(v('table-row', 'tr'), s('display: table-row;'))
      .append(v('table-row-group', 'trg'), s('display: table-row-group;'))
      .append(v('table-column', 'tc'), s('display: table-column;'))
      .append(v('table-column-group', 'tcg'), s('display: table-column-group;'))
      .append(v('table-cell', 't-cell'), s('display: table-cell;'));

  }
}