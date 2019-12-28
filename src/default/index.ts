import { Package } from '../package';
import { colors } from './colors';
import { display } from './display';
import { borders } from './borders';
import { borderColors } from './border-colors';
import { fontSize } from './font-size';
import { padding } from './padding';

export const pkg: Package = {
  name: 'default',
  useShortName: true,
  includeAll: true,
  breakpoints: {
    m: 48,
    l: 64,
    xl: 80,
  },
  modules: [
    colors,
    display,
    borders,
    borderColors,
    fontSize,
    padding
  ]
}