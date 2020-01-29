import { Module } from '../module';
import { BuildContext } from '../build-context';
import { a, v, s, numberToName } from '../builder-helper';

export const positions: Module = {
  name: 'positions',
  prefix: 'position',
  shortPrefix: 'pos',
  useShortPrefix: true,
  useShortAttribute: true,
  useShortValue: 'inapplicable',
  initExplicit: true,
  value: [0.5, 1, 1.5, 2, 3, 4],

  build: (context: BuildContext) => {

    const positions = context.value as number[];

    [
      ['top', 't', (s: number) => `top: ${s}rem;`],
      ['bottom', 'b', (s: number) => `bottom: ${s}rem;`],
      ['left', 'l', (s: number) => `left: ${s}rem;`],
      ['right', 'r', (s: number) => `right: ${s}rem;`]
    ].forEach(values => {
      const attribute = values[0] as string;
      const shortAttribute = values[1] as string;
      const style = values[2] as (s: number) => string;
      positions.forEach(position => {
        const positionName = numberToName(position);

        context.append(a(attribute, shortAttribute), v(positionName), s(style(position)));
      });
    })

    context
      .append(v('absolute'), s('position: absolute;'))
      .append(v('fixed'), s('position: fixed;'))
      .append(v('relative'), s('position: relative;'))
      .append(v('static'), s('position: static;'));

  }

}