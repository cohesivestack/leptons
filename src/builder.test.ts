import { Module } from "./module";
import { Style } from "./style";
import { BuilderContext } from "./builder-context";
import { Builder } from "./builder";
import { Atom } from "./atom";
import { sourceTypes } from "./source";
import { Config } from "./config";
import { clearIdentForTesting } from "./util";

describe("Builder", () => {
  test("atomToCssStyle should create css styles", () => {

    const styles: { [key: string]: Style } = {
      "s-a":         "background-size: auto;",
      "p-{length}":  "background-position: {length};",
      "w-{weight}": ["font-weight: {weight};", (c: BuilderContext, v: string) => c.convertNumberPerHundrerToCss(v)],
      "u-{custom}":   (c: BuilderContext, v: string) => `unknown: ${v};`,
      "{length}":  "size: {length};",
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder();

    const cssLiteral = builder.atomToCssStyle(module, new Atom("t-s-a"));
    expect(cssLiteral).toBe("background-size: auto;");

    const cssItem = builder.atomToCssStyle(module, new Atom("t-p-2px"));
    expect(cssItem).toBe("background-position: 2px;");

    const cssItemFunction = builder.atomToCssStyle(module, new Atom("t-w-3"));
    expect(cssItemFunction).toBe("font-weight: 300;");

    const cssItemFunc = builder.atomToCssStyle(module, new Atom("t-u-value"));
    expect(cssItemFunc).toBe("unknown: value;");

    const cssItemStandalone = builder.atomToCssStyle(module, new Atom("t-100p"));
    expect(cssItemStandalone).toBe("size: 100%;");
  });

  test("addClassName should add the Classname for each type of style", () => {

    const styles: { [key: string]: Style } = {
      "s-a":        "background-size: auto;",
      "p-{length}": "background-position: {length};",
      "w-{weight}": ["font-weight: {weight};", (c: BuilderContext, v: string) => c.convertNumberPerHundrerToCss(v)],
      "u-{custom}": (c: BuilderContext, v: string) => `unknown: ${v};`,
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder();
    builder.addModule(module);

    const classNameLiteral = "t-s-a";
    const classNameItem = "t-p-10px";
    const classNameItemFunction = "t-w-3";
    const classNameFunction = "t-u-any";

    builder.addClassName(classNameLiteral);
    builder.addClassName(classNameItem);
    builder.addClassName(classNameItemFunction);
    builder.addClassName(classNameFunction);

    expect((builder as any).medias[""].classes[classNameLiteral].cssStyle).toBe("background-size: auto;")
    expect((builder as any).medias[""].classes[classNameItem].cssStyle).toBe("background-position: 10px;")
    expect((builder as any).medias[""].classes[classNameItemFunction].cssStyle).toBe("font-weight: 300;")
    expect((builder as any).medias[""].classes[classNameFunction].cssStyle).toBe("unknown: any;")
  });

  test("Class values should be globally replaced in the CSS style", () => {

    const styles: { [key: string]: Style } = {
      "v-{length}": "padding-left: {length}; padding-right: {length};",
      "h-{length}": ["padding-horizontal: {length}; padding-vertial: {length};", (c: BuilderContext, v: string) => c.convertLengthToCss(v)],
      "u-{custom}": (c: BuilderContext, v: string) => `unknown0: ${v}; unknown1: ${v};`,
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder();
    builder.addModule(module);

    const classNameItem = "t-v-1";
    const classNameItemFunction = "t-h-10px";
    const classNameFunction = "t-u-any";

    builder.addClassName(classNameItem);
    builder.addClassName(classNameItemFunction);
    builder.addClassName(classNameFunction);

    expect((builder as any).medias[""].classes[classNameItem].cssStyle).toBe("padding-left: 1rem; padding-right: 1rem;")
    expect((builder as any).medias[""].classes[classNameItemFunction].cssStyle).toBe("padding-horizontal: 10px; padding-vertial: 10px;")
    expect((builder as any).medias[""].classes[classNameFunction].cssStyle).toBe("unknown0: any; unknown1: any;")
  });

  test("addClassName should add the Classname for different medias", () => {

    const styles: { [key: string]: Style } = {
      "w-{weight}": ["font-weight: {weight};", (c: BuilderContext, v: string) => c.convertNumberPerHundrerToCss(v)],
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder({
      medias: {
        M: "only screen and (max-width: 48rem)",
        L: "only screen and (max-width: 64rem)"
      }
    });
    builder.addModule(module);

    const defaultMedia = "t-w-3";
    const mediumMedia = "t-w-3-M";
    const largeMedia = "t-w-3-L";

    builder.addClassName(defaultMedia);
    builder.addClassName(mediumMedia);
    builder.addClassName(largeMedia);

    expect((builder as any).medias[""].classes[defaultMedia].cssStyle).toBe("font-weight: 300;");
    expect((builder as any).medias["M"].classes[defaultMedia]).toBeUndefined();
    expect((builder as any).medias["L"].classes[defaultMedia]).toBeUndefined();

    expect((builder as any).medias[""].classes[mediumMedia]).toBeUndefined();
    expect((builder as any).medias["M"].classes[mediumMedia].cssStyle).toBe("font-weight: 300;");
    expect((builder as any).medias["L"].classes[mediumMedia]).toBeUndefined();

    expect((builder as any).medias[""].classes[largeMedia]).toBeUndefined();
    expect((builder as any).medias["M"].classes[largeMedia]).toBeUndefined();
    expect((builder as any).medias["L"].classes[largeMedia].cssStyle).toBe("font-weight: 300;");
  });

  test("extractClassesFromContent should extract class names with Html regexp", () => {
    const content = `
      <div class="w-100p w-100p-L f-s-1">Text 1</div>
      <div class=" w-90p  w-100p-M  f-s-2  ">Text 2</div>
    `

    const classes = Builder.extractClassesFromContent(content, sourceTypes.html);

    expect(classes.length).toBe(6);
    expect(classes.join("; ")).toBe("w-100p; w-100p-L; f-s-1; w-90p; w-100p-M; f-s-2");
  });

  test("extractClassesFromContent should extract class names with React regexp", () => {
    const content = `
      <div className={\`\${x === 1 ? "f-s-1" : "f-s-1.5 f-s-2"} b-r-1 m-t-2\`}></div>
      <div className={\`m-t-3 m-t-4 \${x === 1 ? "f-s-1" : "f-s-3 f-s-2"} b-r-1 m-t-5\`} ></div>
      <div className="d-f m-t-6 m-t-3"></div>
    `;

    const classes = Builder.extractClassesFromContent(content, sourceTypes.react);

    expect(classes.length).toBe(15);
    expect(classes.join("; ")).toBe("f-s-1; f-s-1.5; f-s-2; b-r-1; m-t-2; m-t-3; m-t-4; f-s-1; f-s-3; f-s-2; b-r-1; m-t-5; d-f; m-t-6; m-t-3");
  });


  test("build should work", () => {

    const content = `
      <div class="w-100p w-100p-L f-s-1">Text 1</div>
      <div class=" w-90p  w-100p-M  f-s-2  ">Text 2</div>
    `

    const plainConfig = {
      lengthType: "em",
      medias: {
        M: "screen and (min-width: 16rem)",
        L: "screen and (min-width: 32rem)"
      },
      source: {
        html: { content: content }
      }
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();

    expect(result.trim()).toBe(clearIdentForTesting(`
      .f-s-1 { font-size: 1em; }
      .f-s-2 { font-size: 2em; }
      .w-100p { width: 100%; }
      .w-90p { width: 90%; }
      @media screen and (min-width: 16rem) {
        .w-100p-M { width: 100%; }
      }
      @media screen and (min-width: 32rem) {
        .w-100p-L { width: 100%; }
      }`
    ));
  });

  test("build using lengths with decimal", () => {

    const content = `
      <div class="f-s-1.5 f-s-2.0em-L">Text 1</div>
    `

    const plainConfig = {
      lengthType: "rem",
      medias: {
        L: "screen and (min-width: 32rem)"
      },
      source: {
        html: { content: content }
      }
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();

    expect(result.trim()).toBe(clearIdentForTesting(`
      .f-s-1\\.5 { font-size: 1.5rem; }
      @media screen and (min-width: 32rem) {
        .f-s-2\\.0em-L { font-size: 2.0em; }
      }`
    ));
  });

  test("build using important", () => {
    const content = `
      <div class="!f-s-1 !f-s-2-L">Text 1</div>
    `

    const plainConfig = {
      lengthType: "rem",
      medias: {
        L: "screen and (min-width: 32rem)"
      },
      source: {
        html: { content: content }
      }
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();

    expect(result.trim()).toBe(clearIdentForTesting(`
      .\\!f-s-1 { font-size: 1rem; }
      @media screen and (min-width: 32rem) {
        .\\!f-s-2-L { font-size: 2rem; }
      }`
    ));
  });

  test("build using pseudo classes and pseudo elements", () => {
    const content = `
      <div class="f-w-5:h f-w-6:h-L">Text 1</div>
      <div class="f-w-5::a f-w-6::a-L">Text 2</div>
      <div class="f-w-5:h::a f-w-6:h::a-L">Text 3</div>
    `

    const plainConfig = {
      lengthType: "rem",
      medias: {
        L: "screen and (min-width: 32rem)"
      },
      source: {
        html: { content: content }
      }
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();

    expect(result.trim()).toBe(clearIdentForTesting(`
      .f-w-5\\:\\:a::after { font-weight: 500; }
      .f-w-5\\:h:hover { font-weight: 500; }
      .f-w-5\\:h\\:\\:a:hover::after { font-weight: 500; }
      @media screen and (min-width: 32rem) {
        .f-w-6\\:\\:a-L::after { font-weight: 600; }
        .f-w-6\\:h-L:hover { font-weight: 600; }
        .f-w-6\\:h\\:\\:a-L:hover::after { font-weight: 600; }
      }`
    ));
  });

  test("build with colors and fonts should work", () => {

    const content = `
      <div class="bg-c-black t-c-white f-f-serif">Text 1</div>
      <div class="bg-c-black t-c-gray f-f-sansSerif">Text 2</div>
    `

    const plainConfig = {
      lengthType: "em",
      medias: {
        M: "screen and (min-width: 16rem)",
        L: "screen and (min-width: 32rem)"
      },
      colors: {
        white: "#ffeeee",
        black: "#001111",
        gray: "#cccccc"
      },
      fonts: {
        serif: "Times New Roman",
        sansSerif: "Roboto"
      },
      source: {
        html: { content: content }
      },
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();

    expect(result.trim()).toBe(clearIdentForTesting(`
      .bg-c-black { background-color: #001111; }
      .f-f-sansSerif { font-family: Roboto; }
      .f-f-serif { font-family: Times New Roman; }
      .t-c-gray { color: #cccccc; }
      .t-c-white { color: #ffeeee; }
      @media screen and (min-width: 16rem) {
      }
      @media screen and (min-width: 32rem) {
      }`
    ));
  });

  test("build with keyword values", () => {

    const content = `
      <div class="bg-c-revert t-c-unset f-f-initial f-f-inherit">Text 1</div>
    `

    const plainConfig = {
      lengthType: "em",
      medias: { },
      colors: { },
      fonts: { },
      source: {
        html: { content: content }
      },
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();

    expect(result.trim()).toBe(clearIdentForTesting(`
      .bg-c-revert { background-color: revert; }
      .f-f-inherit { font-family: inherit; }
      .f-f-initial { font-family: initial; }
      .t-c-unset { color: unset; }`
      ));
  });

  test("include should work", () => {
    const content = `
      <div class="f-s-1px">Text 1</div>
    `

    const plainConfig = {
      lengthType: "em",
      medias: {
        M: "screen and (min-width: 16rem)",
        L: "screen and (min-width: 32rem)"
      },
      include: `
        m-b-1
        p-t-1
        m-b-2-L
        f-s-1px
      `,
      source: {
        html: { content: content }
      },
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();

    expect(result.trim()).toBe(clearIdentForTesting(`
      .f-s-1px { font-size: 1px; }
      .m-b-1 { margin-bottom: 1em; }
      .p-t-1 { padding-top: 1em; }
      @media screen and (min-width: 16rem) {
      }
      @media screen and (min-width: 32rem) {
        .m-b-2-L { margin-bottom: 2em; }
      }`
    ));
  });

  test("Build should include cssBefore and cssAfter", () => {
    const plainConfig = {
      lengthType: "em",
      medias: {
        M: "screen and (min-width: 16rem)",
        L: "screen and (min-width: 32rem)"
      },
      source: {
        html: { content: `<div class="f-s-1">Text 1</div>` }
      },
      cssBefore: "body { border: 0; }",
      cssAfter: ".f-s-1 { font-size: 1px; }"
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();

    expect(result.trim()).toBe(clearIdentForTesting(
      `body { border: 0; }
      .f-s-1 { font-size: 1em; }
      @media screen and (min-width: 16rem) {
      }
      @media screen and (min-width: 32rem) {
      }
      .f-s-1 { font-size: 1px; }`
    ));
  });

});