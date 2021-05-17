const webpackMerge = require('webpack-merge');

const common = require('./webpack.config.js');


const NODE_ENV = 'development';

const config = {
  mode: NODE_ENV,
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: {
          loader: 'eslint-loader',
          options: { cache: true }
        }
      }
    ]
  },
  devServer: {
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    }
  }
};

module.exports = webpackMerge.merge(common(NODE_ENV), config);
