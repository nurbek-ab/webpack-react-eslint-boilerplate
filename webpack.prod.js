const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.config.js');


const NODE_ENV = 'production';

const config = {
  mode: NODE_ENV,
  devtool: false,
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new CleanWebpackPlugin()
  ]
};

module.exports = merge(common(NODE_ENV), config);
