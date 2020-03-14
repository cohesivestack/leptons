import { buildFromPackagesAndClasses } from "./builder";
import { initPackage } from "./default";

describe("Builder", () => {
  test("should create css output", () => {

    const classes = [
      "p-h-1",
      "p-v-2px",
      "p-v-4px-M",
      "p-v-8px-L",
    ];

    const pkg = initPackage({M: 32, L: 64});
    const css = buildFromPackagesAndClasses([pkg], classes);

    expect(css.trim()).toBe(
`.p-h-1 { padding-left: 1rem; padding-right: 1rem; }
.p-v-2px { padding-top: 2px; padding-bottom: 2px; }
@media screen and (min-width: 32rem) {
  .p-v-4px-M { padding-top: 4px; padding-bottom: 4px; }
}
@media screen and (min-width: 64rem) {
  .p-v-8px-L { padding-top: 8px; padding-bottom: 8px; }
}`);

  });
});
