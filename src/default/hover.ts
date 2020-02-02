import { Module } from '../module';
import { BuildContext } from '../build-context';
import { v, s } from '../builder-helper';

export const hover: Module = {
  name: 'hover',
  prefix: 'hover',
  useShortPrefix: 'inapplicable',
  useShortAttribute: 'inapplicable',
  useShortValue: 'inapplicable',
  value: ['colors', 'background-colors'],

  build: (context: BuildContext) => {

    const moduleNames = context.value as string[];

    moduleNames.forEach(mn => {
      const moduleContext = context.getDependencyContext(mn);

      moduleContext.atoms.forEach(atom => {
        context.append(v(`${atom.className}:hover`), s(atom.style));
      });
    })
  }

}