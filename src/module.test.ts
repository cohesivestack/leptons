import { Module } from "./module";

describe("Module", () => {
  test("Create module with all types of styles", () => {

    const literals: { [key: string]: string } = {
      "a": "style: auto;",
      "a-u": "unknown: style;"
    }

    const keywords: { [key: string]: string } = {
      "p-{keyword}": "position: {keyword};",
      "{keyword}": "size: {keyword};",
    }

    const dynamics: { [key: string]: string } = {
      "p-{p$length}": "position: {keyword};",
      "p-{t$length}_{b$length}": "top: {t}; bottom: {b};",
      "w-{w$number}": "font-weight: {w};",
      "a-{custom}": "unknown: ${v};",
      "{custom}": "size: {custom};",
      "{p$length}": "position: {p};",
      "{t$length}_{b$length}": "top: {t}; bottom: {b};"
    }

    const module = new Module(
      "Test",
      "t",
      {...literals, ...keywords, ...dynamics});

    for (const l in literals) {
      expect(module.getLiteral(l)).toBe(literals[l]);
    }

    for (const k in keywords) {
      const parts = k.split("-");
      const dk = parts.length === 1 ? "" : parts[0];
      expect(module.getKeyword(dk) === keywords[k]).toBe(true);
    }

    for (const d in dynamics) {
      const parts = d.split("-");
      const dk = parts.length === 1 ? "" : parts[0];
      const _dynamics = module.getDynamics(dk);
      expect(_dynamics?.find(dynamic => {
        return dynamic.style === dynamics[d]
      })).toBeDefined();
    }
  });
});