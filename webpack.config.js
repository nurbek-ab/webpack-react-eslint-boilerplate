const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');


const { resolve } = path;

module.exports = (NODE_ENV) => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      }
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
              name: 'src/fonts/[name]-[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
              name: 'src/fonts/[name]-[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/vnd.ms-fontobject',
              name: 'src/fonts/[name]-[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/jpeg'
            }
          }
        ]
      },
      {
        test: /\.(png)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.(gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/gif'
            }
          }
        ]
      },
      {
        test: /\.(ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/x-icon'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      Config: resolve(__dirname, 'src', 'config/'),
      Images: resolve(__dirname, 'src', 'images/'),
      Store: resolve(__dirname, 'src', 'js', 'store/'),
      Utils: resolve(__dirname, 'src', 'js', 'utils/'),
      Routes: resolve(__dirname, 'src', 'js', 'routes/'),
      Services: resolve(__dirname, 'src', 'js', 'services/'),
      Constants: resolve(__dirname, 'src', 'js', 'constants/'),
      Components: resolve(__dirname, 'src', 'js', 'components/')
    }
  }
});
