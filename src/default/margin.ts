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
      ['all', 'a', (s: number | string) => `margin: ${s};`],
      ['vertical', 'v', (s: number | string) => `margin-top: ${s}; margin-bottom: ${s};`],
      ['horizontal', 'h', (s: number | string) => `margin-left: ${s}; margin-right: ${s};`],
      ['top', 't', (s: number | string) => `margin-top: ${s};`],
      ['bottom', 'b', (s: number | string) => `margin-bottom: ${s};`],
      ['left', 'l', (s: number | string) => `margin-left: ${s};`],
      ['right', 'r', (s: number | string) => `margin-right: ${s};`]
    ].forEach(values => {
      const name = values[0] as string;
      const shortName = values[1] as string;
      const style = values[2] as (s: number | string) => string;

      context.appendWithShort(
        `${name}-auto`, `${shortName}-auto`, style('auto'))

      sizes.forEach(size => {
        const suffix = numberToName(size);

        context.appendWithShort(
          `${name}-${suffix}`, `${shortName}${suffix}`, style(size))
      });
    })

  }

}