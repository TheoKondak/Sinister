# SINISTER

# WARNING:

# !! This project is not tested enough for production unless you know what you are doing and you do your own debugging !!

An SCSS and JS utility library.

This project intends to act as a last-layer CSS override for CMS systems or for an SCSS organization platform for any other project. It also intends to host some JS components, that will add functionality to a website, and perform various tasks for more see `@get-sinister/js` (under construction).

This is a one-man project. I only work on the project only when I have some free time, and I do some basic testing, but be aware that some things might not work as intended.

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

## Accessing the config data

## The `get` function

You can access the config data with the "get" function. "get" function will only retrieve data from sinister configuration. This way the syntax is simpler and thus retrieving data is quicker.

#### Syntax

```
 get(property, value)
```

For example, if you want to access the colors from the palette:

### Example

Data:

```
$configuration: (
  colors: (
    'primary': hsl(0, 100%, 50%),
    'secondary': hsl(120, 100%, 25%),
    'blue': hsl(240, 100%, 50%),
  ),
  .
  .
  .
```

### You can use:

```
color: get(colors, primary);
```

Or you can assign it to a new local variable so you can call it easier.

```
$primary-color: get(colors, primary);
```

## The `getMap` function

The "getMap" function works similar to "get" function, but in addition, it requires the name of the map as an input.

If we would like to access the primary color, as with the "get" example:

```
getMap($configuration, colors, primary);
```

With the "mapGet" function you can access data in more complex maps.

In the example above, we want to access the bootstrap colors from the configuration of sinister.

The data looks like that:

```
$configuration: (
    bootstrap:
        (
        color:
            (
            bs-blue: #0d6efd,
            bs-indigo: #6610f2,
            bs-purple: #6f42c1,
            .
            .
            .
            ),
        ),
)

```

To retrieve the code use:

```
getMap($configuration, bootstrap, color, bs-blue);
```

# Mixins

### [`EXPERIMENTAL`] `@include grid-template`

Grid-template is an attempt to make responsive design more straightforward by organizing the grid for various media queries.

It is a mixin that receives as an input list of arguments. The first argument is a media query breakpoint from `_sinConfig` , then the mixin expects a list of grid columns and optionally a list of grid rows.

### Syntax:

```
@include grid-template($min-width-query, $grid-template-columns, $grid-template-rows);
```

`$min-width-query` [`string`]. This is a minimum width breakpoint, from which the current list item, will become active. If you left blank, it will be used as a generic grid template.
`$grid-template-columns` [css: `grid-template-column`]. Set the number of collumns for the current list item.  
`$grid-template-rows` [css: `grid-template-row`]. Set the number of rows for the current list item. This is an optional field.
[Read More about grid template rows & columns](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-template-columnsgrid-template-rows)

Note: 1fr is a fraction unit and it's a preferred unit for grids.

### Example:

```
.example--container{
  @include grid-template(('', 1fr), ('xs', 1fr), ('md', (1fr 1fr), (1fr 1fr)), ('lg', 1fr 1fr 1fr));
}
```

This will set a grid, with 1 column as default and xs screens, 2 columns and 2 rows for md screens and 3 columns for lg screens.

##
