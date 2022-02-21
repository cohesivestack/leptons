import { Atom } from "./atom";
import { Builder } from "./builder";

describe("Atom", () => {

  test("Should be created correctly", () => {

    [
      ["a-b", undefined, "a", undefined, "b", undefined, undefined, undefined],
      ["a-b-c", undefined, "a", "b", "c", undefined, undefined, undefined],
      ["a-bb-c:h", undefined, "a", "bb", "c", ["h"], undefined, undefined],
      ["a-b-c:lot", undefined, "a", "b", "c", ["lot"], undefined, undefined],
      ["!a-b", true, "a", undefined, "b", undefined, undefined, undefined],
      ["!a-b-c", true, "a", "b", "c", undefined, undefined, undefined],
      ["!a-b-c-LM", true, "a", "b", "c", undefined, undefined, ["L", "M"]],
      ["!a-b-c:h", true, "a", "b", "c", ["h"], undefined, undefined],
      ["!a-b-c:h:l", true, "a", "b", "c", ["h", "l"], undefined, undefined],
      ["!a-b:h:l-L", true, "a", undefined, "b", ["h", "l"], undefined, ["L"]],
      ["!a-b-c:h:l-L", true, "a", "b", "c", ["h", "l"], undefined, ["L"]],
      ["!a-b:h:l::f", true, "a", undefined, "b", ["h", "l"], "f", undefined],
      ["!a-b-c:h:l::f", true, "a", "b", "c", ["h", "l"], "f", undefined],
      ["!a-b-c:h:l::f-ML", true, "a", "b", "c", ["h", "l"], "f", ["M", "L"]],
    ].forEach(v => {
      const atom = new Atom(v[0] as string, new Builder());

      expect(atom.important).toBe(v[1]);
      expect(atom.module).toBe(v[2]);
      expect(atom.attribute).toBe(v[3]);
      expect(atom.value).toBe(v[4]);
      expect(atom.pseudoClasses).toStrictEqual(v[5]);
      expect(atom.pseudoElement).toBe(v[6]);
      expect(atom.medias).toStrictEqual(v[7]);
    });
  });

  test("Should not be created", () => {
    [
      ["a", "\"a\" \"requires at least the Module and Value\""],
      ["!a", "\"!a\" \"requires at least the Module and Value\""],
      ["a-L", "\"a-L\" \"requires at least the Module and Value\""],
      ["a:h", "\"a:h\" \"requires at least the Module and Value\""],
      ["a:h::f", "\"a:h::f\" \"requires at least the Module and Value\""],
      ["a:h::f-L", "\"a:h::f-L\" \"requires at least the Module and Value\""],
      ["A-b", "\"A-b\" \"has invalid Module characters: \"A\""],
      ["A-b-c", "\"A-b-c\" \"has invalid Module characters: \"A\""],
      ["A-b-c:h-L", "\"A-b-c:h-L\" \"has invalid Module characters: \"A\""],
      ["a:a-b", "\"a:a-b\" \"has invalid Module characters: \"a:a\""],
      ["a-", "\"a-\" \"has an empty value\""]
    ].forEach(v => {
      expect(() => new Atom(v[0] as string, new Builder())).toThrow(v[1]);
    });
  });

});