import { Module } from '../module';
import { BuildContext } from '../build-context';

export const textDecoration: Module = {
  name: 'text-decoration',
  prefix: 'td',
  useShortName: true,
  value: 'default',
  build: (context: BuildContext) => {

    context
      .appendWithShort('underline', 'u', 'text-decoration: underline;')
      .appendWithShort('strike', 's', 'text-decoration: line-through;')
      .appendWithShort('overline', 'o', 'text-decoration: overline;')
      .appendWithShort('none', 'n', 'text-decoration: none;')

  }
}