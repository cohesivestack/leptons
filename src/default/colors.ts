import { Module } from '../module';
import { BuildContext } from '../build-context';


export const colors: Module = {
  name: 'colors',
  prefix: '',
  useShortName: 'inapplicable',
  initExplicit: true,
  value: {
    'lightest-red': '#ffebee',
    'light-red': '#ef9a9a',
    'red': '#f44336',
    'dark-red': '#d32f2f',
    'darkest-red': '#b71c1c'
  },

  build: (context: BuildContext) => {
    const colors = context.value;

    Object.keys(colors).forEach(name => {
      context.append(name, `color: ${colors[name]};`);
    });
  }

}