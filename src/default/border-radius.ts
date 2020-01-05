import { Module } from '../module';
import { BuildContext } from '../build-context';
import { numberToName } from '../builder-helper';

export const borderRadius: Module = {
  name: 'border-radius',
  prefix: 'br',
  useShortName: true,
  value: [0.0625, 0.125, 0.25, 0.5, 1],
  initExplicit: true,

  build: (context: BuildContext) => {
    
    const radiuses = context.value as number[];

    radiuses.forEach(radius => {
      context.append(numberToName(radius), `border-radius: ${radius}rem;`);
    });

    context.append('-circle', `border-radius: 100%;`);

  }
}