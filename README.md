# WARNING: This package is in alpha phase. Don't use yet!

# Leptons

Leptons is an Atomic CSS generator

## Default configuration

``` yaml
package: default

media:
  m: 48
  l: 64
  xl: 128

modules:

  - colors: { black: "#000", white: "#fff", near-white: "#eee" }

```

## Configuration file parts
```yaml
medias: ...
fonts: ...
colors: ...
shadows: ...
transitions: ...
animations: ...
classes: ...
customs: ...
include: ...
aliases: ...
css: ...
items: ...
```

## Classes anatomy

```
[!]module[-attribute]-value[:pseudoClass][::pseudoElement][_media]
```
* `[]` brackets means optional
* `!` is the symbol for `!important`



## Type of values



`[symbol | unit | units | item[color|font|shadow|transition|custom-item] ] `

* Symbol: a lowercase letter or combination of them.

  Examples:  

  * `c` in `t-a-c` is builded as `.t-a-c { text-align: center; }` 
  * `lt` in `t-dl-lt` is builded as `.t-dl-lt { text-decoration-line: line-through; }`

  Symbols, generally, have an equivalent long version name.
  Example:

  * `t-a-c` is equivalent to `t-a-center` 
  * `t-dl-lt` is equivalent to `t-dl-lineThrough` 

* Unit: a quantity value.
  Examples: 

  * `p-l-12px` is builded as `.p-l-12px { padding-left: 12px; }`
  * `m-t-1em` is builded as `.m-t-1em { margin-top: 1em; }`

* Units: 



## License

Copyright © 2019-2021 Carlos Forero

Atomic Styles is released under the [MIT License](LICENSE).

