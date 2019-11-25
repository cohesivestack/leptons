import { ModuleInfo } from './module-info';
import { Builder } from './builder';

export const flexBox: ModuleInfo = {
  name: "flex-box",
  prefix: "f",
  useShortName: false,

  build: (builder: Builder) => {
    builder
      .append('auto', 'a', 'flex: 1 1 auto; min-width:0; min-height:0')
      .append('none', 'n', 'flex: none')
      .append('column', 'c', 'flex-direction: column')
      .append('row', 'r', 'flex-direction: row')
      .append('wrap', 'w', 'flex-wrap: wrap');
  }
}