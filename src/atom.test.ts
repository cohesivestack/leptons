import { Atom } from "./atom";

describe("Atom", () => {

  test("Should be created correctly", () => {

    [
      ["a-b", undefined, "a", undefined, "b", undefined, undefined, undefined],
      ["a-b-c", undefined, "a", "b", "c", undefined, undefined, undefined],
      ["I-a-b", true, "a", undefined, "b", undefined, undefined, undefined],
      ["I-a-b-c", true, "a", "b", "c", undefined, undefined, undefined],
      ["I-a-b-c-LM", true, "a", "b", "c", undefined, undefined, ["L", "M"]],
      ["I-a-b-c--h", true, "a", "b", "c", ["h"], undefined, undefined],
      ["I-a-b-c--hAl", true, "a", "b", "c", ["h", "l"], undefined, undefined],
      ["I-a-b--hAl-L", true, "a", undefined, "b", ["h", "l"], undefined, ["L"]],
      ["I-a-b-c--hAl-L", true, "a", "b", "c", ["h", "l"], undefined, ["L"]],
      ["I-a-b--hAl--F", true, "a", undefined, "b", ["h", "l"], "F", undefined],
      ["I-a-b-c--hAl--F", true, "a", "b", "c", ["h", "l"], "F", undefined],
      ["I-a-b-c--hAl--F-ML", true, "a", "b", "c", ["h", "l"], "F", ["M", "L"]],
    ].forEach(v => {
      const atom = new Atom(<string>v[0]);

      expect(atom.important).toBe(v[1]);
      expect(atom.module).toBe(v[2]);
      expect(atom.attribute).toBe(v[3]);
      expect(atom.value).toBe(v[4]);
      expect(atom.pseudoClasses).toStrictEqual(v[5]);
      expect(atom.pseudoElement).toBe(v[6]);
      expect(atom.breakpoints).toStrictEqual(v[7]);
    });
  });

  test("Should not be created", () => {
    [
      ["a", "Class parts requires at least the Module and Value"],
      ["I-a", "Class parts requires the Module and Value"],
      ["a-L", "Class parts requires the Module and Value"],
      ["a--h", "Class parts requires the Module and Value"],
      ["a--h--F", "Class parts requires the Module and Value"],
      ["a--h--F-L", "Class parts requires the Module and Value"],
      ["A-b", "Invalid Module characters \"A\""],
      ["A-b-c", "Invalid Module characters \"A\""],
      ["A-b-c--h-L", "Invalid Module characters \"A\""],
      ["a--a-b", "Value is empty"]
    ].forEach(v => {
      console.log(v)
      expect(() => new Atom(<string>v[0])).toThrow(v[1]);
    });
  });

});