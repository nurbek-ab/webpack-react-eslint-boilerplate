const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.config.js');


const NODE_ENV = 'production';

const config = {
  mode: NODE_ENV,
  devtool: false,
  plugins: [
    new CleanWebpackPlugin.CleanWebpackPlugin()
  ]
};

module.exports = webpackMerge.merge(common(NODE_ENV), config);
