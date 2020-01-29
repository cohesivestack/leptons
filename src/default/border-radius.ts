import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s, numberToName } from '../builder-helper';

export const borderRadius: Module = {
  name: 'border-radius',
  prefix: 'border-radius',
  shortPrefix: 'br',
  useShortPrefix: true,
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  initExplicit: true,
  value: [0.0625, 0.125, 0.25, 0.5, 1],
  
  build: (context: BuildContext) => {
    
    const radiuses = context.value as number[];

    radiuses.forEach(radius => {
      context.append(v(numberToName(radius)), s(`border-radius: ${radius}rem;`));
    });

    context.append(v('circle'), s(`border-radius: 100%;`));

  }
}