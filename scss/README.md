# SINISTER

## WARNING:

## !! This project is not tested enough for production unless you know what you are doing and you do your own debugging !!

<br>

Sinister is an SCSS and JS utility library.

This project intends to act as a last-layer CSS override for CMS systems or for an SCSS organization platform for any other project. It also intends to host some JS components, that will add functionality to a website, and perform various tasks for more see `@get-sinister/js` (under construction).

This is a one-man project. I only work on the project only when I have some free time, and I do some basic testing, but be aware that some things might not work as intended.

Currently the documentation is very limited, but I will start writing a bit more while testing current Sinister features.

Also I keep releasing hotfixes almost daily.
<br>
<br>


## Installation

`npm i @get-sinister/sass`

## Documentation

[Documentation](https://theokondak.github.io/Sinister/)

## Changelog
> Not working at the moment
- [CHANGELOG.md](https://github.com/TheoKondak/Sinister/blob/main/scss/CHANGELOG.md)
- [CHANGELOG.JSON](https://github.com/TheoKondak/Sinister/blob/main/scss/changelog-data.json)


## Setup the data

In order for sinister to work, 2 files are needed. 

- In your root directory, where `npm_package` is located, create a file called `_sin.config.scss`.
  
    ``` Folder Structure
    .
    ├── package.json
    ├── node_modules/
    ├── _sin.config.scss

    ```

    Then open `_sin.config.scss` file and add the boilerplate to start working.

    ``` _sin.config.scss content
      @use './node_modules/@get-sinister/sass/sin-core/functions/public/set-config-func' as sin;
      $configuration: sin.set-config(
        (
      
        )
      );
    ```

- Inside your scss files directory create a file called `_sin.scss`

    ``` Folder Structure
      ├── package.json
      ├── node_modules/
      ├── _sin.config.scss
      ├── scss/
        ├── custom.scss     # Main scss file
        ├── pages/          # Folder with more scss files
        ├── _sin.scss       # file to import `Sinister` to your project.
    ```

- The functionality of Sinister lies within `sin-core` folder. All you have to do is load this folder into a file in order to start working with it. Open `_sin.scss` file and add the `@forward` link to the package.

    ``` _sin.scss content
          @forward '../node_modules/@get-sinister/sass/sin-core';
    ```
- Importing sinister to a new file is easy. Use the `@use` to import it to the file you are working on. [Read More](https://sass-lang.com/documentation/at-rules/use)

ex.

    ```
    @use '../sin' as *;

    ```

Keep in mind that the path is relative.

For advanced users, by commenting out files in various `_index.scss` files, you can prune the output code. That might be useful for production.
