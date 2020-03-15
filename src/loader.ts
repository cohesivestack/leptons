import { buildFromYaml } from './builder';

export function loader(content: string): string {
  return buildFromYaml(content);
}