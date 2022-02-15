# SINISTER

# WARNING:

# !! This project is not tested enough for production, unless you know what you are doing and you do your own debuging !!

A SCSS and JS utility library.

This project intends to act as a last layer css overide for CMS systems or for an SCSS organization platform for any other project. It also intends to host some JS components, that will add functionality to a website, and perform various tasks for more see `@get-sinister/js` (under construction).

This is a one man project. I only work on the project only when I have some free time, and I do some basic testing, but be aware that some things might not work as intended.

# Setup the data

sinConfig hosts all the scss variables. In this file, you can set up data like color palette, responsive breakpoints, set new font families and many more. Browse the file to see which options are available.

## Importing sinister to a new file

The functionality of Sinister lies within sin folder. All you have to do is load this folder into a file in order to start working with it. In order to load the file you have to use the `@use` . [Read More](https://sass-lang.com/documentation/at-rules/use)

ex.

```
@use '../sin' as *;

```

Keep in mind that the path is relative, so depending on your current files location, the example code might be different

For advanced users, by commenting out files in various `_index.scss` files, you can prune the output code. That might be useful for production.

## Accessing the config data

### The "get" function

You can access the config data with the "get" function. "get" function will only retrieve data from sinister configuration. This way the syntax is simpler and thus retrieving data is quicker.

#### Syntax

```
 get(property, value)
```

For example if you want to access the colors from the palette:

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

You can use:

```
color: get(colors, primary);
```

Or you can assign it to a new local variable so you can call it easier.

```
$primary-color: get(colors, primary);
```

### The "getMap" function

The "getMap" function works similar to "get" function, but in addition it requires the name of the map as an input.

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

##
