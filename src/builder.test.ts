import { Module } from "./module";
import { Builder } from "./builder";
import { Atom } from "./atom";
import { LengthType } from "./length";
import { sourceTypes } from "./source";
import { clearIdentForTesting } from "./util";
import { Config } from "./config";

describe("Builder", () => {
  test("atomToCssStyle should create css styles", () => {

    const cases = [
      ["a", "a: a;", "t-a", "a: a;" ],
      ["a-s", "b: s;", "t-a-s", "b: s;" ],
      ["{keyword}", "c: {keyword};", "t-initial", "c: initial;" ],
      ["a-{keyword}", "c-a: {keyword};", "t-a-initial", "c-a: initial;" ],
      ["{p$length}", "d: {p};", "t-10", "d: 10px;" ],
      ["{p1$length}_{p2$length}", "e: {p1} {p2};", "t-10_20rem", "e: 10px 20rem;" ],
      ["a-{p$length}", "f: {p};", "t-a-19rem", "f: 19rem;" ],
      ["a-{p1$length}_{p2$length}", "g: {p1} {p2};", "t-a-19_29rem", "g: 19px 29rem;" ],
      ["a-{custom}", "h: {custom};", "t-a-anything", "h: anything;" ],
    ]

    const styles = Object.fromEntries(cases.map(c => [c[0], c[1]]));

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder({lengthType: LengthType.Px}, false);
    builder.addModule(module);

    cases.forEach(([key, style, className, result]) => {
      expect(new Atom(className, builder).transform()[""].cssStyle).toBe(result);
    })

  });

  test("Class values should be globally replaced in the CSS style", () => {

    const styles: { [key: string]: string } = {
      "s-a":          "background-size: auto;",
      "p-{keyword}":  "background-position: {keyword};",
      "p-{p$length}": "background-position: {p};"
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder();

    builder.addModule(module);

    const classNameLiteral = "t-s-a";
    const classNameKeyword = "t-p-revert";
    const classNameDynamic = "t-p-10px";

    builder.addClassName(classNameLiteral);
    builder.addClassName(classNameKeyword);
    builder.addClassName(classNameDynamic);

    expect((builder as any).medias[""].classes[classNameLiteral].cssStyle).toBe("background-size: auto;");
    expect((builder as any).medias[""].classes[classNameKeyword].cssStyle).toBe("background-position: revert;");
    expect((builder as any).medias[""].classes[classNameDynamic].cssStyle).toBe("background-position: 10px;");
  });

  test("addClassName should add the Classname for different medias", () => {

    const styles: { [key: string]: string } = {
      "p-{p$length}": "padding: {p};",
      "m-{m$length}": "margin: {m};"
    }

    const module = new Module(
      "Test",
      "t",
      styles);

    const builder = new Builder({
      lengthType: LengthType.Rem,
      medias: {
        M: "only screen and (max-width: 48rem)",
        L: "only screen and (max-width: 64rem)",
        X: "only screen and (max-width: 80rem)"
      }
    });
    builder.addModule(module);

    const defaultMedia = "t-p-3";
    const mediumMedia = "t-p-3-M";
    const largeMedia = "t-p-3-L";
    const mediumAndLargeMedia = "t-m-3-ML";

    builder.addClassName(defaultMedia);
    builder.addClassName(mediumMedia);
    builder.addClassName(largeMedia);
    builder.addClassName(mediumAndLargeMedia);

    expect((builder as any).medias[""].classes[defaultMedia].cssStyle).toBe("padding: 3rem;");
    expect((builder as any).medias["M"].classes[defaultMedia]).toBeUndefined();
    expect((builder as any).medias["L"].classes[defaultMedia]).toBeUndefined();
    expect((builder as any).medias["X"].classes[defaultMedia]).toBeUndefined();

    expect((builder as any).medias[""].classes[mediumMedia]).toBeUndefined();
    expect((builder as any).medias["M"].classes[mediumMedia].cssStyle).toBe("padding: 3rem;");
    expect((builder as any).medias["L"].classes[mediumMedia]).toBeUndefined();
    expect((builder as any).medias["X"].classes[mediumMedia]).toBeUndefined();

    expect((builder as any).medias[""].classes[largeMedia]).toBeUndefined();
    expect((builder as any).medias["M"].classes[largeMedia]).toBeUndefined();
    expect((builder as any).medias["L"].classes[largeMedia].cssStyle).toBe("padding: 3rem;");
    expect((builder as any).medias["X"].classes[largeMedia]).toBeUndefined();

    expect((builder as any).medias[""].classes[largeMedia]).toBeUndefined();
    expect((builder as any).medias["M"].classes[mediumAndLargeMedia].cssStyle).toBe("margin: 3rem;");
    expect((builder as any).medias["L"].classes[mediumAndLargeMedia].cssStyle).toBe("margin: 3rem;");
    expect((builder as any).medias["X"].classes[mediumAndLargeMedia]).toBeUndefined();
  });

  test("extractClassesFromContent should extract class names with Html regexp", () => {
    const content = `
      <div class="w-100p w-100p-L f-s-1">Text 1</div>
      <div class=" w-90p  w-100p-M  f-s-2 p-1_2 p-t_1_3px ">Text 2</div>
    `

    const classes = Builder.extractClassesFromContent(content, sourceTypes.html);

    expect(classes.length).toBe(8);
    expect(classes.join("; ")).toBe("w-100p; w-100p-L; f-s-1; w-90p; w-100p-M; f-s-2; p-1_2; p-t_1_3px");
  });

  test("extractClassesFromContent should extract class names with React regexp", () => {
    const content = `
      <div className={\`\${x === 1 ? "f-s-1" : "f-s-1.5 f-s-2"} b-r-1 m-t-2\`}></div>
      <div className={\`m-t-3 m-t-4_4_2px \${x === 1 ? "f-s-1" : "f-s-3 f-s-2"} b-r-1:h m-t-5\`} ></div>
      <div className="d-f m-t-6 m-t-3:h"></div>
    `;

    const classes = Builder.extractClassesFromContent(content, sourceTypes.react);

    expect(classes.length).toBe(15);
    expect(classes.join("; ")).toBe("f-s-1; f-s-1.5; f-s-2; b-r-1; m-t-2; m-t-3; m-t-4_4_2px; f-s-1; f-s-3; f-s-2; b-r-1:h; m-t-5; d-f; m-t-6; m-t-3:h");
  });


  test("build should work", () => {

    const content = `
      <div class="w-100px w-100px-L f-s-1">Text 1</div>
      <div class=" w-90px  w-100px-M p-10px_20px_30rem_40pt  f-s-2:h  ">Text 2</div>
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
      .f-s-2\\:h:hover { font-size: 2em; }
      .p-10px_20px_30rem_40pt { padding: 10px 20px 30rem 40pt; }
      .w-100px { width: 100px; }
      .w-90px { width: 90px; }
      @media screen and (min-width: 16rem) {
        .w-100px-M { width: 100px; }
      }
      @media screen and (min-width: 32rem) {
        .w-100px-L { width: 100px; }
      }`
    ));
  });

  test("build using lengths with decimal", () => {
    const content = `
      <div class="f-s-1.5 f-s-2.0em-L p-1.0_2.0_3.0_4.0 p-5.0_6.0_7.0_8.0-L">Text 1</div>
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
      .p-1\\.0_2\\.0_3\\.0_4\\.0 { padding: 1.0rem 2.0rem 3.0rem 4.0rem; }
      @media screen and (min-width: 32rem) {
        .f-s-2\\.0em-L { font-size: 2.0em; }
        .p-5\\.0_6\\.0_7\\.0_8\\.0-L { padding: 5.0rem 6.0rem 7.0rem 8.0rem; }
      }`
    ));
  });

  test("build using lengths with percentage", () => {
    const content = `
      <div class="f-s-1% f-s-2.5%-L p-1%_2%_3%_4% p-5.5%_6.5%_7.5%_8.5%-L">Text 1</div>
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
      .f-s-1\\% { font-size: 1%; }
      .p-1\\%_2\\%_3\\%_4\\% { padding: 1% 2% 3% 4%; }
      @media screen and (min-width: 32rem) {
        .f-s-2\\.5\\%-L { font-size: 2.5%; }
        .p-5\\.5\\%_6\\.5\\%_7\\.5\\%_8\\.5\\%-L { padding: 5.5% 6.5% 7.5% 8.5%; }
      }`
    ));
  });

  test("build using important", () => {
    const content = `
      <div class="!f-s-1 !f-s-1.5%-M !f-s-2-L">Text 1</div>
    `

    const plainConfig = {
      lengthType: "rem",
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
      .\\!f-s-1 { font-size: 1rem !important; }
      @media screen and (min-width: 16rem) {
        .\\!f-s-1\\.5\\%-M { font-size: 1.5% !important; }
      }
      @media screen and (min-width: 32rem) {
        .\\!f-s-2-L { font-size: 2rem !important; }
      }`
    ));
  });

  test("build using pseudo classes and pseudo elements", () => {
    const content = `
      <div class="f-w-500:h f-w-600:h-L p-1.1%_1.2%:h::a-L">Text 1</div>
      <div class="f-w-500::a f-w-600::a-L">Text 2</div>
      <div class="f-w-500:h::a f-w-600:h::a-L">Text 3</div>
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
      .f-w-500\\:\\:a::after { font-weight: 500; }
      .f-w-500\\:h:hover { font-weight: 500; }
      .f-w-500\\:h\\:\\:a:hover::after { font-weight: 500; }
      @media screen and (min-width: 32rem) {
        .f-w-600\\:\\:a-L::after { font-weight: 600; }
        .f-w-600\\:h-L:hover { font-weight: 600; }
        .f-w-600\\:h\\:\\:a-L:hover::after { font-weight: 600; }
        .p-1\\.1\\%_1\\.2\\%\\:h\\:\\:a-L:hover::after { padding: 1.1% 1.2%; }
      }`
    ));
  });

  test("build with colors and fonts should work", () => {

    const content = `
      <div class="bg-c-black b-c-powderBlue t-c-white f-f-serif">Text 1</div>
      <div class="bg-c-black b-c-powderBlue t-c-gray f-f-sansSerif">Text 2</div>
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
      .b-c-powderBlue { border-color: #B0E0E6; }
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

  test("build with custom classes and collection", () => {

    const content = `
      <div class="c-a c-p">Text 1</div>
      <div class="x-p-a x-p-2px x-p-va">Text 2</div>
    `

    const plainConfig = {
      lengthType: "em",
      medias: { },
      colors: { },
      fonts: { },
      collections: {
        col: {
          va: "10px",
          vb: "20px"
        }
      },
      classes: {
        "x-p-a": "padding: auto;",
        "x-p-{v$length}": "padding: {v};",
        "x-p-{v:col}": "padding: {v};",

        // Override leptons class
        "c-p": "cursor: move;"
      },
      source: {
        html: { content: content }
      },
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();


    expect(result.trim()).toBe(clearIdentForTesting(`.c-a { cursor: auto; }
      .c-p { cursor: move; }
      .x-p-2px { padding: 2px; }
      .x-p-a { padding: auto; }
      .x-p-va { padding: 10px; }`
    ));
  });

  test("build components", () => {

    const content = `
      <div class="bg-c-white b-c-powderBlue t-c-white f-f-serif">Text 1</div>
      <div class="comp-a">Text 2</div>
      <div class="comp-gray_0.5rem">Text 3</div>
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
      components: {
        "comp-a": "bg-c-black b-c-powderBlue t-c-white f-f-sansSerif p-t-1px p-t-2px-M p-t-3px-L",
        "comp-{c$color}_{l$length}": "bg-c-{c} b-c-powderBlue t-c-white f-f-sansSerif p-t-{l} p-t-{l}-M p-t-3px-L",
      },
      source: {
        html: { content: content }
      },
    }

    const builder = new Builder(plainConfig as Config, true);
    const result = builder.buildToString();

    expect(result.trim()).toBe(clearIdentForTesting(`
      .b-c-powderBlue { border-color: #B0E0E6; }
      .bg-c-white { background-color: #ffeeee; }
      .comp-a { background-color: #001111; border-color: #B0E0E6; color: #ffeeee; font-family: Roboto; padding-top: 1px; }
      .comp-gray_0\\.5rem { background-color: #cccccc; border-color: #B0E0E6; color: #ffeeee; font-family: Roboto; padding-top: 0.5rem; }
      .f-f-serif { font-family: Times New Roman; }
      .t-c-white { color: #ffeeee; }
      @media screen and (min-width: 16rem) {
        .comp-a { padding-top: 2px; }
        .comp-gray_0\\.5rem { padding-top: 0.5rem; }
      }
      @media screen and (min-width: 32rem) {
        .comp-a { padding-top: 3px; }
        .comp-gray_0\\.5rem { padding-top: 3px; }
      }
      `
    ));
  });

});