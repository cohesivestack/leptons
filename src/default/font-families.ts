import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s } from '../builder-helper';

export const fontFamilies: Module = {
  name: 'font-families',
  prefix: '',
  useShortPrefix: 'inapplicable',
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  initExplicit: true,
  value: {
    'sans-serif': 'roboto, "helvetica neue", helvetica, tahoma, geneva, verdana, arial',
    'serif': 'georgia, baskerville, palatino,times, "times new roman"',
    'mono': '"robot slab", "roboto mono", monaco, courier, "courier new"',
    'condensed': '"roboto condensed", "arial narrow"',
    'script': '"brush script mt", "apple chancery", "comic sans ms"' 
  },

  build: (context: BuildContext) => {
    const fontFamilies = context.value;

    Object.keys(fontFamilies).forEach(name => {
      context.append(v(name), s(`font-family: ${fontFamilies[name]};`));
    });
  }

}