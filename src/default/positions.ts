import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const positions: Module = {
  name: 'positions',
  prefix: '',
  useShortName: 'inapplicable',
  value: [0.5, 1, 1.5, 2, 3, 4],
  initExplicit: true,

  build: (context: BuildContext) => {

    const positions = context.value as number[];

    [
      ['top', (s: number) => `top: ${s}rem;`],
      ['bottom', (s: number) => `bottom: ${s}rem;`],
      ['left', (s: number) => `left: ${s}rem;`],
      ['right', (s: number) => `right: ${s}rem;`]
    ].forEach(values => {
      const name = values[0] as string;
      const style = values[1] as (s: number) => string;
      positions.forEach(position => {
        const suffix = numberToName(position);

        context.append(
          `${name}-${suffix}`, style(position))
      });
    })

    context
      .append('absolute', 'position: absolute;')
      .append('fixed', 'position: fixed;')
      .append('relative', 'position: relative;')
      .append('static', 'position: static;');

  }

}