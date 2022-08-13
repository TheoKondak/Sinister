# SINISTER

## WARNING

## !! This project even though unit tested, is still in beta !!

<br>

Sinister is an SCSS and JS utility library.

The SCSS library tries to simplify daily common cases like creating a grid, managing spacings like paddings, gaps etc, managing project color palette in SCSS level as well as give usefull utility mixin and functions. For more read the documentation.

You can implement Sinister in your SCSS routine just by importing it to your SCSS file.

The JS part is currently in hietus, with not much to offer.

Most of the `mixins` and `functions` are unit tested and work as expected.

That being said, this is a one-man project. I only work on the it only when I have some free time, so be aware that some things might not work as intended since coverage is not 100% yet.

<br>
<br>

## Installation

`npm i @get-sinister/sass`

## Changelog

> Not working at the moment

- [CHANGELOG.md](https://github.com/TheoKondak/Sinister/blob/main/scss/CHANGELOG.md)
- [CHANGELOG.JSON](https://github.com/TheoKondak/Sinister/blob/main/scss/changelog-data.json)

## Configuration

In order for sinister to work, 2 files are needed.

- In your root directory, where `npm_package` is located, create a file called `_sin.config.scss`.
  
    ``` Folder Structure
    .
    ├── package.json
    ├── node_modules/
    ├── _sin.config.scss

    ```

    Then open `_sin.config.scss` file and add the boilerplate to start working.

    ``` scss
      _sin.config.scss content
        @use './node_modules/@get-sinister/sass/sin-core/functions/public/set-config-func' as sin;
        $configuration: sin.set-config(
        (
          breakpoints: (
            new-breakpoint: 420px;
          )
        )
      );
    ```

    >  **tip:** at any point in your scss file you can type `@debug help();` to print sinister configuration values.

    >  **tip:** keep in mind that if you update `_sin.config.scss` values, and you are using `sass --watch` you will have to restart.

<br>

- Inside your scss files directory create a file called `_sin.scss`. You will have to `@use` this file to load sinister in your project.

    ``` Folder Structure
      ├── package.json
      ├── node_modules/
      ├── _sin.config.scss
      ├── scss/
        ├── custom.scss     # Main scss file
        ├── pages/          # Folder with more scss files
        ├── _sin.scss       # file to import `Sinister` to your project.
    ```

    To see the scema and default values check the [documentation](https://theokondak.github.io/Sinister/#setup-variable-sinister-default-configuration).

- The functionality of Sinister lies within `sin-core` folder. All you have to do is load this folder into a file in order to start working with it. Open `_sin.scss` file and add the `@forward` link to the package.

    ``` _sin.scss content
          @forward '../node_modules/@get-sinister/sass/sin-core';
    ```

- Importing sinister to a new file is easy. Use the `@use` to import it to the file you are working on. [Read More](https://sass-lang.com/documentation/at-rules/use)

ex.
<br>
    ```
    @use '../sin' as *;
    ```
<br>
Keep in mind that the path is relative.

## Documentation

For more, refer to the online documentation.

- [Documentation](https://theokondak.github.io/Sinister/)
- For older versions check the [archive](https://github.com/TheoKondak/Sinister/tree/main/scss/documentation)
