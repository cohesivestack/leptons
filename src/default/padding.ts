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
      ['all', 'a', (s: number) => `padding: ${s}rem;`],
      ['vertical', 'v', (s: number) => `padding-top: ${s}; padding-bottom: ${s}rem;`],
      ['horizontal', 'h', (s: number) => `padding-left: ${s}; padding-right: ${s}rem;`],
      ['top', 't', (s: number) => `padding-top: ${s}rem;`],
      ['bottom', 'b', (s: number) => `padding-bottom: ${s}rem;`],
      ['left', 'l', (s: number) => `padding-left: ${s}rem;`],
      ['right', 'r', (s: number) => `padding-right: ${s}rem;`]
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