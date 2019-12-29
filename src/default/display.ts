import { Module } from '../module';
import { BuildContext } from '../build-context';

export const display: Module = {
  name: 'display',
  prefix: 'd',
  useShortName: true,
  value: 'default',
  build: (context: BuildContext) => {

    context
      .appendWithShort('none', 'n', 'display: none')
      .appendWithShort('inline', 'i', 'display: inline')
      .appendWithShort('block', 'b', 'display: block')
      .appendWithShort('inline-block', 'ib', 'display: inline-block')
      .appendWithShort('inline-table', 'it', 'display: inline-table')
      .appendWithShort('table', 't', 'display: table')
      .appendWithShort('table-row', 'tr', 'display: table-row')
      .appendWithShort('table-row-group', 'trg', 'display: table-row-group')
      .appendWithShort('table-column', 'tc', 'display: table-column')
      .appendWithShort('table-column-group', 'tcg', 'display: table-column-group')
      .appendWithShort('table-cell', 't-cell', 'display: table-cell');

  }
}