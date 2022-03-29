# Sinister Installation

<br>

To install sinister, [download node](https://nodejs.org/en/).

Then open a terminal inside the project and type:

```
npm install @get-sinister/sass
```

After NPM finishes it's installation, sinister will run a post installation script. This script will create a folder called `scss` in your root directory.

Inside this folder some files will be created. In the files there are some core files like `_sin.scss`, which is responsible for loading `Sinister` from `node_modules`.

Another file that is required is `_sin.config.scss`. In this file, you will setup some parameters about the project.

> In order to compile successfully, make sure you add `--load-path node_modules/@get-sinister/sass` to your sass compilation command.

```
sass --load-path node_modules/@get-sinister/sass <source_code>:<compiled_code>
```

Inside scss folder, you can start working with your project.

In case you want to move the project to some other folder location, you will have to update the package location manually (for now).

To do that find `_sin.scss` and update the path accordingly.
