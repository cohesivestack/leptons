export function numberToName(n: number) {
  const ns = n.toString()
  return ns.replace(new RegExp('\\.', 'g'), '_')
}