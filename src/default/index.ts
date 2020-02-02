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
import { lineHeight } from './line-height';
import { padding } from './padding';
import { widths } from './widths';
import { heights } from './heights';
import { maxWidths } from './max-widths';
import { minHeight } from './min-height';
import { margin } from './margin';
import { flexBox } from './flex-box';
import { text } from './text';
import { positions } from './positions';
import { cursors } from './cursors';
import { objectFit } from './object-fit';
import { opacity } from './opacity';
import { visibility } from './visibility';
import { zIndex } from './z-index';
import { hover } from './hover';

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
    lineHeight,
    padding,
    margin,
    widths,
    heights,
    minHeight,
    maxWidths,
    text,
    positions,
    cursors,
    objectFit,
    opacity,
    visibility,
    zIndex,
    hover
  ]
}