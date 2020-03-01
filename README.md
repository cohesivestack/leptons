# WARNING: This package is in alpha phase. Don't use yet!

# Leptons

Leptons is an Atomic CSS generator

## Default configuration

``` yaml
package: default

breakpoints:
  m: 48
  l: 64
  xl: 128

modules:

  - colors: { black: "#000", white: "#fff", near-white: "#eee" }

```

## Class names by module

* background
  * color `bg-c-[color-name]`
* border
  * width `b-w-[size]`
    * top `b-wt-[size]`
    * right `b-wr-[size]`
    * bottom `b-wb-[size]`
    * left `b-wl-[size]`
  * color `b-c-[color]`
    * horizontal `b-ch-[color]`
    * vertical `b-cv-[color]`
    * top `b-ct-[color]`
    * right `b-cr-[color]`
    * bottom `b-cb-[color]`
    * left `b-cl-[color]`
  * style `b-s-[style]`.
    Styles: `n|none, h|hidden, i|inset, o|outset, h|hidden, d|dotted, da|dashed, do|double, g|groove, r|ridge   `
    * horizontal `b-sh-[style]`
    * Vertical `b-sv-[style]`
    * top `b-st-[style]`
    * right `b-sr-[style]`
    * bottom `b-sb-[style]`
    * left `b-sl-[style]`
  * radius `b-r-[size]`
    * top `b-rt-[size]`
    * right `b-rr-[size]`
    * bottom `b-rb-[size]`
    * left `b-rl-[size]`
    * top-left `b-rtl-[size]`
    * top-right `b-rtr-[size]`
    * bottom-left `b-rbl-[size]`
    * bottom-right `b-rbr-[size]`
* cursor `c-[type]`
  Types: `h|help, w|wait, c|crosshair, n|not-allowed, z|zoom-in, g|grab `
* display `d-[type]`
  Types: `n|none, b|block, i|inline, f|flex`
* padding `p-[size]`
  * horizontal `p-h-[style]`
  * Vertical `p-v-[style]`
  * top `p-t-[style]`
  * right `p-r-[style]`
  * bottom `p-b-[style]`
  * left `p-l-[style]`
* margin `m-[size]`
  * horizontal `m-h-[style]`
  * Vertical `m-v-[style]`
  * top `m-t-[style]`
  * right `m-r-[style]`
  * bottom `m-b-[style]`
  * left `m-l-[style]`
* flex
  * flex `fl-[flex-type]`
    flex-type: `n|none, a|auto, i|initial`
  * Flex direction `fl-d-[direction]`
    direction: `r|row, c|column, rr|row-reverse, cr|column-reverse`
  * Flex wrap `fl-w-[type]`
    type: `w|wrap, n|no-wrap`
  * Flex justify content `fl-jc-[type]`
    Type: `s|start, e|end, c|center, sb|space-between, sa|space-around `


## Units System

* Pixels `px|pixels`
* Points `pt|points`
* Percentage `p|percent`
* Em `e|em`
* Rem `r|rem`
* Centimeters `c|cm|centimeters`
* Milimeters `m|mm|milimeters`
* Viewport height `vh|vheight`
* Viewport width `vw|vwidth`
* Viewport max `vmax`
* Viewport min `vmin`
* Width of 0 `ch`

The default suffix for the units system is `rem` . So, for example, the following class will define a padding of `2rem`:

```
p-l-2
```

will produce a css with:

```
padding-left: 2rem;
```

You can change the default prefix in `leptons.yaml` file:

```
unit: px
```





## License

Copyright © 2019-2020 Carlos Forero

Atomic Styles is released under the [MIT License](LICENSE).

