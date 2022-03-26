## Accessing the config data

## `@function get()`

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

## `@function getMap()`

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
            ),
        ),
)

```

To retrieve the code use:

```
getMap($configuration, bootstrap, color, bs-blue);
```

<br>

## `@function color()`

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

```
@debug help(colors);
@debug hlp(colors);

@debug hlp(breakpoints);
```

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

<br>

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

## @function type()

The `type()` function is an advanced type function. The advantage of this function is that it can check multiple data types at once. So if you want to check if a variable is `string` or `number`, or `bool`, now you can do it in one line!

### Syntax

```

@debug type($data, $data-types);

```

> By having 'datatypes' as a single arguement you can get printed a list of SASS data types!

### Example

```
$justAVar: 'this is a string variable';

@if type($justAVar, (null, number, map, bool)){
  // Do something
}@else if type($justAVar, string){
  // Do something else
}

@debug type(datatypes); // Will return a list of SASS Data types

```
