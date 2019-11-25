import { ModuleInfo } from './module-info';
import { Builder } from './builder';

export const display: ModuleInfo = {
  name: "display",
  prefix: "d",
  useShortName: false,

  build: (builder: Builder) => {
    builder
      .append('none', 'n', 'display: none')
      .append('inline', 'i', 'display: inline')
      .append('block', 'b', 'display: block')
      .append('inline-block', 'ib', 'display: inline-block')
      .append('inline-table', 'it', 'display: inline-table')
      .append('table', 't', 'display: table')
      .append('table-row', 'tr', 'display: table-row')
      .append('table-row-group', 'trg', 'display: table-row-group')
      .append('table-column', 'tc', 'display: table-column')
      .append('table-column-group', 'tcg', 'display: table-column-group')
      .append('table-cell', 't-cell', 'display: table-cell');
  }
}