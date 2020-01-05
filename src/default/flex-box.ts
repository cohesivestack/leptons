import { Module } from '../module';
import { BuildContext } from '../build-context';

export const flexBox: Module = {
  name: 'flex-box',
  prefix: 'fb',
  useShortName: true,
  value: 'default',
  build: (context: BuildContext) => {

    context
      .appendWithShort('-auto', 'a', 'flex: 1 1 auto; min-width:0; min-height:0;')
      .appendWithShort('-none', 'n', 'flex: none;')
      .appendWithShort('-column', 'c', 'flex-direction: column;')
      .appendWithShort('-row', 'r', 'flex-direction: row;')
      .appendWithShort('-wrap', 'w', 'flex-wrap: wrap;')

      .appendWithShort('-justify-start', 'j-start', 'justify-content: flex-start;')
      .appendWithShort('-justify-end', 'j-end', 'justify-content: flex-end;')
      .appendWithShort('-justify-center', 'j-center', 'justify-content: center;')
      .appendWithShort('-justify-stretch', 'j-stretch', 'justify-content: stretch;')
      .appendWithShort('-justify-space-between', 'j-space-between', 'justify-content: space-between;')
      .appendWithShort('-justify-space-around', 'j-space-around', 'justify-content: space-around;')
      .appendWithShort('-justify-space-evenly', 'j-space-evenly', 'justify-content: space-evenly;')

      .appendWithShort('-items-start', 'i-start', 'align-items: flex-start;')
      .appendWithShort('-items-end', 'i-end', 'align-items: flex-end;')
      .appendWithShort('-items-center', 'i-center', 'align-items: center;')
      .appendWithShort('-items-stretch', 'i-stretch', 'align-items: stretch;')
      .appendWithShort('-items-baseline', 'i-baseline', 'align-items: baseline;')

      .appendWithShort('-self-start', 's-start', 'align-self: flex-start;')
      .appendWithShort('-self-end', 's-end', 'align-self: flex-end;')
      .appendWithShort('-self-center', 's-center', 'align-self: center;')
      .appendWithShort('-self-stretch', 's-stretch', 'align-self: stretch;')
      .appendWithShort('-self-baseline', 's-baseline', 'align-self: baseline;')

      .appendWithShort('-content-start', 'c-start', 'align-content: flex-start;')
      .appendWithShort('-content-end', 'c-end', 'align-content: flex-end;')
      .appendWithShort('-content-center', 'c-center', 'align-content: center;')
      .appendWithShort('-content-stretch', 'c-stretch', 'align-content: stretch;')
      .appendWithShort('-content-space-between', 'c-space-between', 'align-content: space-between;')
      .appendWithShort('-content-space-around', 'c-space-around', 'align-content: space-around;')
      .appendWithShort('-content-space-evenly', 'c-space-evenly', 'align-content: space-evenly;')

  }
}