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

## Accessing the config data

## The `get()` function

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

## The `getMap()` function

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

<br>

### Access Color Data

Since Sinister 0.6.01 function `color()` is available. Function color is part of a new approach when it comes to accessing data.

Function `color()` takes as an input a color from the colors list declared in \_sinConfig.

### Example:

Let's say we wanted to access the primary color from our \_sinConfig file.

The old way:

```
color: get(colors, primary);
```

Now it's just:

```
color: color(primary);
```

<br>

# More Functions

## `@function help()`

This function will make a bulk print of the `_help-func.scss` settings and options to the terminal.

### Syntax

```
@debug help();
```

Note that the `()` are required after the function call.

This will print a list of settings available to the `_help-func.scss`. It will print just first level childs otherwise it would be chaotic.

The data will have this format:

```
<setting>:
option
option
option

-----
```

And also value pair format:

```
setting:
option-key option-value
option-key option-value

-----
```

## `@function set-config()`

Since version 0.6.5, the configuration of sinister has changed. These are breaking changes. What has changed, is that sinister configuration file is inside sinister engine now, with some default values for some fields like breakpoints etc.

The `set-config()` function will let you update the configuration of sinister at will. You can add more colors, font-sizes, breakpoints etc, using the `set-config()` function.

### Setup

The first step to setup a new configuration file for a project, is similar to setting up Webpack, Babel, PostCSS. It requires a config file.

- The config file must sit inside the `scss` folder, where `_sin.scss` is.
- The name of the file must be `_sin.config.scss`.
- Import the `set-config()` function by using: `@use '../node_modules/@get-sinister/sass/sin/modules/set-config-func' as *;`
- The file must have an scss variable called `$configuration`.

> Keep in min that you cannot add new keys to `$configuration`, you can only update existing keys.

After setting up the above, you will be able to start using the set config function.

### Syntax

```
$configuration: set-config(
  $new-map,
  $original-map,
)

```

<br>

- The `$new-map` is the map the you have to create. You can do that in a couple of ways.

The first way is to create a new variable, and set a map there.

```
$new-config: (
  (
    colors: (
      new-color-1: #111,
      new-color-2: #222,
    ),
    breakpoints: (
      new-breakpoint-1: 1px,
      new-breakpoint-2: 2px,
    ),
  )
);

$configuration: set-config($new-config);
```

The second method is to simply create the map while calling the `set-config()` function.

```
$new-config: set-config(
(
  colors:(
    new-color-1: #111,
    new-color-2: #222,
  ),
  breakpoints: (
    new-breakpoint-1: 1px,
    new-breakpoint-2: 2px,
  )
),

)
```

In both cases you will end up with a `$configuration` map that contains the values set. So the final result will be:

```
$configuration: (
   colors:(
    new-color-1: #111,
    new-color-2: #222,
  ),
  breakpoints: (
    new-breakpoint-1: 1px,
    new-breakpoint-2: 2px,
  )
)
```

<br>

- The `$original-map` is optional. By default it is reffering the default sinister configuration file. You can set it up though so it inherits multiple configuration maps.

So let's say besides our default `$configuration` map, we want to have another setup map that for example is specific to a part of a project. You can chain maps and add them together. `set-config()` will return a merged final version.

```
$project-1: set-config(
  (
    colors: (
      color-1: #111,
    ),
    breakpoints: (
      new-breakpoint: 1px,
    ),
  ),
);

$project-2: set-config(
  (
    colors: (
      color-4: #444,
    ),
    breakpoints: (
      and-another-breakpoint: 3px
    ),
    fontSizes: (
      new-font-size: 3.4rem
    )
  ),
  $project-1,
);

$configuration: set-config(
  (
    colors: (
      color-5: #555,
      color-6: #666,
    ),
  ),
  $project-2
);

```

So we begin by defining `$project-1`. Then we define some new values in `$project-2` and pass we pass `$project-1` data into it, and lastly, we add the compined data to `$configuration`. So now the data of `$project-1`, `$project-2` and `$configuration` are combined and are available to use in the project.

## @function help()

The help function is a supportive function. It will print the data of `$configuration` or any other map available.

### Syntax

```
@debug help($config-sub-key, $config-map);
```

or

```
@debug hlp($config-sub-key, $config-map);
```

- `$config-sub-key`: Must be a key belonging to the reference map.
- `$config-map`: By default this is the `$configuration` map. Nevertheless, you can call help for other custom maps by assigning a new map.

If `help()` is called without any parameter, it will display the whole map (by default the `$configuration` map).

### Example

# Mixins

<br>

## [`EXPERIMENTAL`] `@include grid-template`

Grid-template is an attempt to make responsive design more straightforward by organizing the grid for various media queries.

It is a mixin that receives as an input list of arguments. The first argument is a media query breakpoint from `_sinConfig` , then the mixin expects a list of grid columns and optionally a list of grid rows.

### Syntax:

```
@include grid-template($min-width-query, $grid-template-columns, $grid-template-rows);
```

- `$min-width-query` [`string`]. This is a minimum width breakpoint, from which the current list item, will become active. If you left blank, it will be used as a generic grid template.
- `$grid-template-columns` [css: `grid-template-column`]. Set the number of collumns for the current list item.
- `$grid-template-rows` [css: `grid-template-row`]. Set the number of rows for the current list item. This is an optional field.
  [Read More about grid template rows & columns](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-template-columnsgrid-template-rows)

Note: 1fr is a fraction unit and it's a preferred unit for grids.

### Example:

```
.example--container{
  @include grid-template(('', 1fr), ('xs', 1fr), ('md', (1fr 1fr), (1fr 1fr)), ('lg', 1fr 1fr 1fr));
}
```

This will set a grid, with 1 column as default and xs screens, 2 columns and 2 rows for md screens and 3 columns for lg screens.
<br>
<br>

## `@include spacing()`

This mixin will help with the spacing properties workflow. It works with margin, padding and gap properties.

The mixin takes a list of inputs, where it requires a breakpoint, the type of the spacing, a spacing value from sinConfig, and optionally a number that will scale the spacing value if needed to give more flexibility.

### Syntax

```
@include spacing(($breakpoint, $spacing-property, $spacing-direction, $spacing-property-value, $scale))
```

- `$breakpoint`: accepts a breakpoint from sinConfig, (`xs`,`md`,`lg`, etc)
- `$spacing-property`: `m` for Margin, `p` for padding and `g` for gap.
- `$spacing-direction`: `t`: top, `r`: right, `b`: bottom, `l`: left, `x`: x-axis, `y`: y-axis, `g`: both x and y axis.
- `$spacing-property-value`: that's spacing value from sinConfig. By default 0 - 6
- `$scale`: This is a multiplier of the `$spacing-property-value`. This is optional.

Please note that the mixin accepts margins, paddings and gaps. The gap property though does not behave as the other two. Instead it accepts values for all directions (`g`), for columns (`x`) and for rows (`y`). Nevertheless if you put an left or right or top or bottom, it will still work, but it will translate it to x,y axis.

### Example

```
@include spacing((m l 1 1.1), (xs m l 2 1.2), (md m l 3));
```

The second arguement of the list `(xs m l 2 1.2)` will create a rule, for screens larger than `xs` that will add a margin-left, of 2 , and then will scale it by 1.2.
You might have noticed that the first list element `(m l 1)` does not contain a breakpoint. This will act as a global rule, which then will be overwritten by the rest of the rules depending on the screen size.
And finally, the third element, does not contain a scale arguement. So for `md` screens and above, the scale will be the default, which is 1.

## `@include mqXXX()`

This is a media query mixin and it comes in three flavors. `mq($min, $max)`, `mqMin($min)` and `mqMax($max)`.

The `$min` and `$max` values, can by a number with values, or a breakpoint. In case it is a number without units, pixels will be selected as a default unit.

### Syntax

```
mq($min, $max)
```

```
mqMin($min)
```

```
mqMax($max)
```

- `$min`: The minimum screen size from which the content will become active.
- `$max`: The maximum screen size to which the content will become active.

## Example

```
@include mqMin(xs){
  display: block;
}
@include mqMin(40em){
  display: inline;
}
@include mqMax(573px){
  display: inline-block;
}

@include mq(md, xl){
  display: none;
}
```

##

```

```
