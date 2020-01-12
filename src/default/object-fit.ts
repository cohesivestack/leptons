import { Module } from '../module';
import { BuildContext } from '../build-context';

export const objectFit: Module = {
  name: 'object-fit',
  prefix: 'of',
  useShortName: true,
  value: 'default',
  build: (context: BuildContext) => {

    context
      .appendWithShort('fill', 'f', 'object-fit: fill;')
      .appendWithShort('contain', 'c', 'object-fit: contain;')
      .appendWithShort('cover', '-cover', 'object-fit: cover;')
      .appendWithShort('scale-down', 's', 'object-fit: scale-down;')
      .appendWithShort('none', 'n', 'object-fit: none;');

  }
}