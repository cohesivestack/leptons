import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const padding: Module = {
  name: 'padding',
  prefix: 'p',
  useShortName: true,
  value: [0.25, 0.50, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12],
  initExplicit: true,

  build: (context: BuildContext) => {

    const sizes = context.value as number[];

    [
      ['all', 'a', (s: number) => `padding: ${s};`],
      ['vertical', 'v', (s: number) => `padding-top: ${s}; padding-bottom: ${s};`],
      ['horizontal', 'h', (s: number) => `padding-left: ${s}; padding-right: ${s};`],
      ['top', 't', (s: number) => `padding-top: ${s};`],
      ['bottom', 'b', (s: number) => `padding-bottom: ${s};`],
      ['left', 'l', (s: number) => `padding-left: ${s};`],
      ['right', 'r', (s: number) => `padding-right: ${s};`]
    ].forEach(values => {
      const name = values[0] as string;
      const shortName = values[1] as string;
      const style = values[2] as (s: number) => string;
      sizes.forEach(size => {
        const suffix = numberToName(size);

        context.appendWithShort(
          `${name}-${suffix}`, `${shortName}${suffix}`, style(size))
      });
    })

  }

}