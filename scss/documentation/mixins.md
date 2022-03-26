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
