const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const autoprefixer = require('autoprefixer');
const { webpack } = require('webpack');

// Variables
let mode = 'development';
const entryPoint = 'test-sin/scss/sinister.webpack.js'; // Webpack is primarily a js bundler. Entry point cant be blank, You just need to have a value here, doesn't' matter if the files exist or not.
const outputLocation = 'test-sin/compilled'; // Where the compilled files will be placed.
const cssOutputFilename = 'sinister-compiled-webpack'; // CSS Output Filename

process.env.NOVE_ENV === 'production' && mode == 'production';

module.exports = {
  mode: mode,
  entry: __dirname + '/' + entryPoint,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: cssOutputFilename + '.css',
    }),
    // new LoaderOptionsPlugin({
    //   options: {
    //     postcss: [autoprefixer()],
    //   },
    // }),
  ],
  experiments: {
    topLevelAwait: true,
  },
  devtool: 'source-map',

  output: {
    filename: 'sinister.js',
    path: __dirname + '/' + outputLocation,
  },
};
