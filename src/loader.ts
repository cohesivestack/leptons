import { Builder } from './builder';

export function loader(content: string): string {
  return (new Builder()).buildFromYaml(content);
}