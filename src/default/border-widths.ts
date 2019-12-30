import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const borderWidths: Module = {
  name: 'border-widths',
  prefix: 'bw',
  useShortName: true,
  value: [0.0625, 0.125, 0.25, 0.5, 1],
  initExplicit: true,

  build: (context: BuildContext) => {
    
    const widths = context.value as number[];

    [
      ['all', 'a', 'border-width'],
      ['top', 't', 'border-top-width'],
      ['bottom', 'b', 'border-bottom-width'],
      ['left', 'l', 'border-left-width'],
      ['right', 'r', 'border-right-width']
    ].forEach(([name, shortName, style]) => {
      widths.forEach(width => {
        const suffix = numberToName(width);

        context.appendWithShort(
          `${name}-${suffix}`, `${shortName}${suffix}`, `${style}: ${width}rem;`);
      });
    })

  }
}