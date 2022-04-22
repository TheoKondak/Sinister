# SINISTER

## WARNING:

## !! This project is not tested enough for production unless you know what you are doing and you do your own debugging !!

<br>

Sinister is an SCSS and JS utility library.

This project intends to act as a last-layer CSS override for CMS systems or for an SCSS organization platform for any other project. It also intends to host some JS components, that will add functionality to a website, and perform various tasks for more see `@get-sinister/js` (under construction).

This is a one-man project. I only work on the project only when I have some free time, and I do some basic testing, but be aware that some things might not work as intended.

Currently the documentation is very limited, but I will start writing a bit more while testing current Sinister features.

Also I keep releasing hotfixes almost daily.
<br><br>

# Setup the data

`_sinConfig` hosts all the scss variables. In this file, you can set up data like color palette, responsive breakpoints, set new font families, and many more. Browse the file to see which options are available.

## Importing sinister to a new file

The functionality of Sinister lies within sin folder. All you have to do is load this folder into a file in order to start working with it. In order to load the file, you have to use the `@use`. [Read More](https://sass-lang.com/documentation/at-rules/use)

ex.

```
@use '../sin' as *;

```

Keep in mind that the path is relative.

For advanced users, by commenting out files in various `_index.scss` files, you can prune the output code. That might be useful for production.

# Documentation

- [Installation](https://github.com/TheoKondak/Sinister/blob/sin060/scss/documentation/classes.md?plain=1)
- [Configuring A Project](https://github.com/TheoKondak/Sinister/blob/sin060/scss/documentation/classes.md?plain=1)
- [Mixins](https://github.com/TheoKondak/Sinister/blob/sin060/scss/documentation/classes.md?plain=1)
- [Functions](https://github.com/TheoKondak/Sinister/blob/sin060/scss/documentation/functions.md?plain=1)
- [Classes](https://github.com/TheoKondak/Sinister/blob/sin060/scss/documentation/classes.md?plain=1)

# Roadmap

- Place untested mixins and functions in experimental
- Do more testing to basic functions like `set-config()`, `type()` etc
- Update flex approach. Remove obsolete classes, and find a better way to utilize grid via mixins
- Add flex mixin, to create responsive grid.
  - Logic similar to grid. ex `@include flex(('', properties/values)('xs', properties/values))`
- Add function that creates classes from maps of data `breakpoint-property-value`, ex `xs-display-none`.
  - Add a map of properties and a bull value to enable/disable some class
  - Add documentation about class generation options
- Create private and public function folder and move functions accordingly

# Documentation To do

- development/production
- Image-wrapper
- Typography
  - Responsive font sizes
  - Default font sizes
  - disable-list-style mixin and global config variable
- prefix url func
- 
## SASSDOC HERMAN GIST

[gist](https://gist.github.com/TheoKondak/0c258ff5fdb22a79482f14000cc09ff9)