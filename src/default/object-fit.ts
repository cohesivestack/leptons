import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s } from '../builder-helper';

export const objectFit: Module = {
  name: 'object-fit',
  prefix: 'object-fit',
  shortPrefix: 'of',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: true,
  value: 'default',
  build: (context: BuildContext) => {

    context
      .append(v('fill', 'f'), s('object-fit: fill;'))
      .append(v('contain', 'c'), s('object-fit: contain;'))
      .append(v('cover', 'cover'), s('object-fit: cover;'))
      .append(v('scale-down', 'sd'), s('object-fit: scale-down;'))
      .append(v('none', 'n'), s('object-fit: none;'));

  }
}