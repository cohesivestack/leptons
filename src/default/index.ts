import { Package } from '../package';
import { colors } from './colors';
import { backgroundColors } from './background-colors';
import { display } from './display';
import { borderWidths } from './border-widths';
import { borderRadius } from './border-radius';
import { borderColors } from './border-colors';
import { fontSize } from './font-size';
import { fontWeights } from './font-weights';
import { fontFamilies } from './font-families';
import { padding } from './padding';
import { widths } from './widths';
import { heights } from './heights';
import { maxWidths } from './max-widths';
import { margin } from './margin';
import { flexBox } from './flex-box';
import { textDecoration } from './text-decoration';

export const pkg: Package = {
  name: 'default',
  useShortName: true,
  includeAll: true,
  breakpoints: {
    m: 48,
    l: 64
  },
  modules: [
    colors,
    backgroundColors,
    display,
    flexBox,
    borderWidths,
    borderRadius,
    borderColors,
    fontSize,
    fontWeights,
    fontFamilies,
    padding,
    margin,
    widths,
    heights,
    maxWidths,
    textDecoration
  ]
}