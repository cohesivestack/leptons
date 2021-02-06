# Leptons

Unopinionated and Pragmatic Atomic CSS Generator.

### WARNING: This package is in an early alpha phase. Don't use it yet!

## Roadmap

Current version is `0.1.0.alpha.11`. The first goal is to release version `0.1.0` in order to make this tool public. However, new versions could break compatibility with old versions until version 1.0 is reached.

### Version 0.1.0
- [x] Basic CSS generator
- [x] Basic modules: `background`, `border`, `boxSizing`, `cursor`, `display`, `flexBox`, `font`, `height`, `margin`, `max`, `min`, `object`, `opacity`, `padding`, `position`, `text`, `verticalAlign`, `visibility`, `width`, `zIndex`.
- [x] !important
- [x] Pseudo classes
- [x] Pseudo elements
- [x] Command line interface
- [x] Watcher
- [x] Add the type of value keyword, supporting `initial`, `revert`, `inherit` and `unset`
- [ ] Shadows collection
- [ ] Display errors, missing classes, duplicated classes
- [ ] Add modules:
  - [ ] `all`
  - [ ] `animation`
  - [ ] `backface`
  - [ ] `caret`
  - [ ] `caption`
  - [ ] `columns`
  - [ ] `grid`
  - [ ] `list`
  - [ ] `outline`
  - [ ] `resize`
  - [ ] `scroll`
  - [ ] `tab-size`
  - [ ] `transform`
  - [ ] `transition`,  `user-select`
  - [ ] `white-space`
  - [ ] `word`
- [ ] Classes web search portal

### Version 0.2.0
- [ ] Aliases
- [ ] Classes
- [ ] Collections
- [ ] Components
- [ ] Website
- [ ] Documentation

### Version 0.3.0
- [ ] Allow multiple values in functions

### Version 0.4.0
- [ ] Classes search command line

### Version 1.0
- [ ] External module system

## Default configuration

``` yaml
source:
  html:
    - '*.htm'
    - '*.html'
output: ./leptons.css
lengthType: rem
medias:
  M: 'screen and (min-width: 48rem)'
  L: 'screen and (min-width: 64rem)'
```

## Configuration file parts
```yaml
source: ...
output: ...
lengthType: ...
medias: ...
colors: ...
fonts: ...
shadows: ...
include: ...
aliases: ...
components: ...
classes: ...
collections: ...
css_before: ...
css_after: ...
```

## Class name syntax

The folowing code shows the specification for the syntax of the class names in Leptons.

```
[!]module[-attribute]-value[:pseudoClass][::pseudoElement][-media]
```
* `[]` brackets means optional.
  So, any class requires as minimun the module name and the value.
  Example: In `p-1px`, the character `p` represents the Padding module and `1px`  is the value. So this is builded as `.p-1px { padding: 1px; }`
* `module` the module name.
  Example: In `f-s-9px`, the character `f` represents the Font module, so this is builded as `.f-s-12px { font-size: 9px; }`
* `attribute` the attribute of the module to set.
  Example: in `m-t-8px`, `s` is the Top attribute of the Margin module, so this is builded as `.m-t-8px { margin-top: 8px; }`
* `value` the value assigned to the attribute.
  Example: in `t-a-c`, `c` is the value assigned to the Align attribute of the Text module, so this is builded as `.t-a-c { text-align: center; }`
* `pseudoClass` one or multiple CSS pseudo classes assigned to the class.
Example: in `t-dl-u:h`, `:h` represents the `:hover` css pseudo class, so this is builded as `.t-dl-u\:h:hover { text-decoration-line: underline; }`
* `!` the symbol to represent the `!important` modifier in CSS.
  Example: `!p-1px` is builded as `.\!p-1px { padding: 1px !important; }`


## Type of values

* Character(s): a lowercase letter or combination of them.

  Examples:

  * `c` in `t-a-c` is the `center` value for the `align` attribute of the Text module
  * `lt` in `t-dl-u` is the `underline` value for the `decoration-line` attribute of the Text module

  Characters, generally, have an equivalent long version name.
  Example:

  * `t-a-c` can be written as `t-a-center`
  * `t-dl-lt` can be written as `t-dl-lineThrough`

  As you see in the example above, camelCase convention is used when the long name is composed for two or more words.

* Length:  a number followed by the type of length.
  Examples:

  * `12px` in `p-l-12px` is the  `12` value expressed in pixels for the Left attribute of the Padding module.
  * `1p` in `m-t-1p` is the value 1 expressed in Percentage for the Top attribute of the Margin module.

* Color: some attributes of some modules uses a color name as values. The name of the color must be defined in the `leptons.yaml` configuration file.
Examples:

  * `black` in `t-c-black` is the value for the `black` entry defined in the `colors` collection of the config file `leptons.yaml`

* Font: some attributes of some modules uses a color name as values. The name of the color must be defined in the `leptons.yaml` configuration file.
  Examples:

  * `black` in `t-c-black` is the value for the `black` entry defined in the `colors` collection of the config file `leptons.yaml`

* Font: some attributes of some modules uses a color name as values. The name of the color must be defined in the `leptons.yaml` configuration file.
  Examples:

  * `black` in `t-c-black` is the value for the `black` entry defined in the `colors` collection of the config file `leptons.yaml`



## License

Copyright © 2019-2021 Carlos Forero

Atomic Styles is released under the [MIT License](LICENSE).

