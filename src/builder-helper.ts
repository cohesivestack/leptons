export function numberToName(n: number) {
  return n.toString().replace(new RegExp('\\.', 'g'), '_')
}