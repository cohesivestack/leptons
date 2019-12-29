import { Module } from '../module';
import { BuildContext } from '../build-context';

export const flexBox: Module = {
  name: 'flex-box',
  prefix: 'f',
  useShortName: true,
  value: 'default',
  build: (context: BuildContext) => {

    context
      .appendWithShort('auto', 'a', 'flex: 1 1 auto; min-width:0; min-height:0')
      .appendWithShort('none', 'n', 'flex: none')
      .appendWithShort('column', 'c', 'flex-direction: column')
      .appendWithShort('row', 'r', 'flex-direction: row')
      .appendWithShort('wrap', 'w', 'flex-wrap: wrap');

  }
}