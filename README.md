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

# JS Modules

## Full Screen Menu Grid

This module will create a grid with dynamic background images.

How to use it:

This module has an HTML part, a JS part and an SCSS part.

First create the HTML code required:

```
    <div id="fullScreenImageGrid" class="fullscreen menu-grid--container">
      <div class="menu-grid--background-container">
        <img src="https://vastphotos.com/files/uploads/photos/10551/hero-l.jpg?v=1571743514" alt="" class="menu-grid--background default-image" />
      </div>

      <div class="menu-grid--item">
        <a class="fill-container" title="" href="#"><span class="title">Item1</span></a>
      </div>
      <div class="menu-grid--item">
        <a class="fill-container" title="" href="#"><span class="title">Item2</span></a>
      </div>
      <div class="menu-grid--item">
        <a class="fill-container" title="" href="#"><span class="title">Item3</span></a>
      </div>

    </div>
```

Import the module to custom js file in order to be able to use it.

```
import { fullScreenMenuGrid } from './sinLoader.js';

```

Create a new variable and then initialize the module using the init method.

```
const testGrid = new fullScreenMenuGrid();

testGrid.init({
  containerSelector: '#fullScreenImageGrid',
  backgroundContainerSelector: '.menu-grid--background-container',
  defaultImage: '.default-image',
  scaleInDelay: '100',
  fadeAnimationDelay: '140',
  background: [{ dummy: '' },
  { item1: 'https://vastphotos.com/files/uploads/photos/10702/hero-m.jpg' },
  { item2: 'https://vastphotos.com//files/uploads/photos/10684/hero-l.jpg' }],
  { item3: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' }],
});

```

`containerSelector` : \[STRING\] The container selector. This must be a unique query selector.\
`backgroundContainerSelector`: \[STRING\] Selector for the background images container'. This must be a unique query selector.\
`defaultImage`: \[STRING\] Selector for the default background image. This must be a unique query selector. This is the default background image, before any of the items is being hovered.\
`background`: \[ARRAY OF OBJECTS \] Background requires an object. The key must be the content of the anchor, and the value must be a string with an image URL. Create one for each item in the grid. For now there is a bug where the first item of the array must be a dummy item. \
`scaleInDelay`: \[STRING\] Optional, set the delay before the scale in animation happens.\
`fadeAnimationDelay`: \[STRING\] Optional, set the delay of the fade in / fade out animation while hovering on an item.\

##
