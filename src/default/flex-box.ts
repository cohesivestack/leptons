import { Module } from '../module';
import { BuildContext } from '../build-context';
import { a, v, s } from '../builder-helper';

export const flexBox: Module = {
  name: 'flex-box',
  prefix: 'flex-box',
  shortPrefix: 'fb',
  useShortPrefix: true,
  useShortAttribute: true,
  useShortValue: true,
  value: 'default',

  build: (context: BuildContext) => {

    context
      .append(v('auto', 'a'), s('flex: 1 1 auto; min-width:0; min-height:0;'))
      .append(v('none', 'n'), s('flex: none;'))
      .append(v('column', 'c'), s('flex-direction: column;'))
      .append(v('row', 'r'), s('flex-direction: row;'))
      .append(v('wrap', 'w'), s('flex-wrap: wrap;'))

      .append(a('justify', 'j'), v('start', 's'), s('justify-content: flex-start;'))
      .append(a('justify', 'j'), v('end', 'e'), s('justify-content: flex-end;'))
      .append(a('justify', 'j'), v('center', 'c'), s('justify-content: center;'))
      .append(a('justify', 'j'), v('stretch', 'stretch'), s('justify-content: stretch;'))
      .append(a('justify', 'j'), v('space-between', 'sb'), s('justify-content: space-between;'))
      .append(a('justify', 'j'), v('space-around', 'sa'), s('justify-content: space-around;'))
      .append(a('justify', 'j'), v('space-evenly', 'se'), s('justify-content: space-evenly;'))

      .append(a('items', 'i'), v('start', 's'), s('align-items: flex-start;'))
      .append(a('items', 'i'), v('end', 'e'), s('align-items: flex-end;'))
      .append(a('items', 'i'), v('center', 'c'), s('align-items: center;'))
      .append(a('items', 'i'), v('stretch', 'stretch'), s('align-items: stretch;'))
      .append(a('items', 'i'), v('baseline', 'b'), s('align-items: baseline;'))

      .append(a('self', 's'), v('start', 's'), s('align-self: flex-start;'))
      .append(a('self', 's'), v('end', 'e'), s('align-self: flex-end;'))
      .append(a('self', 's'), v('center', 'c'), s('align-self: center;'))
      .append(a('self', 's'), v('stretch', 'stretch'), s('align-self: stretch;'))
      .append(a('self', 's'), v('baseline', 'b'), s('align-self: baseline;'))

      .append(a('content', 'c'), v('start', 's'), s('align-content: flex-start;'))
      .append(a('content', 'c'), v('end', 'e'), s('align-content: flex-end;'))
      .append(a('content', 'c'), v('center', 'c'), s('align-content: center;'))
      .append(a('content', 'c'), v('stretch', 'stretch'), s('align-content: stretch;'))
      .append(a('content', 'c'), v('space-between', 'sb'), s('align-content: space-between;'))
      .append(a('content', 'c'), v('space-around', 'sa'), s('align-content: space-around;'))
      .append(a('content', 'c'), v('space-evenly', 'se'), s('align-content: space-evenly;'))

  }
}