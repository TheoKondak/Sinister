# sinister

An SCSS utility library

Website with prefix data: http://shouldiprefix.com/#background-image-options

# Setup the data

## Importing sinister to a new file

First you must import sin folder and use it as a default.

ex.

```
@use '../sin' as *;

```

Keep in mind that the path is relative, so depending on your current files location, the example code might be different

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
