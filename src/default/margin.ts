import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const margin: Module = {
  name: 'margin',
  prefix: 'm',
  useShortName: true,
  value: [0.25, 0.50, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12],
  initExplicit: true,

  build: (context: BuildContext) => {

    const sizes = context.value as number[];

    [
      ['all', 'a', (s: string) => `margin: ${s};`],
      ['vertical', 'v', (s: string) => `margin-top: ${s}; margin-bottom: ${s};`],
      ['horizontal', 'h', (s: string) => `margin-left: ${s}; margin-right: ${s};`],
      ['top', 't', (s: string) => `margin-top: ${s};`],
      ['bottom', 'b', (s: string) => `margin-bottom: ${s};`],
      ['left', 'l', (s: string) => `margin-left: ${s};`],
      ['right', 'r', (s: string) => `margin-right: ${s};`]
    ].forEach(values => {
      const name = values[0] as string;
      const shortName = values[1] as string;
      const style = values[2] as (s: string) => string;

      context.appendWithShort(
        `${name}-auto`, `${shortName}-auto`, style('auto'))

      sizes.forEach(size => {
        const suffix = numberToName(size);

        context.appendWithShort(
          `${name}-${suffix}`, `${shortName}${suffix}`, style(size + 'rem'))
      });
    })

  }

}