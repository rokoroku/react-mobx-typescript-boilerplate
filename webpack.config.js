const path = require("path");
const webpack = require('webpack');

// variables
let dotenv = require('dotenv').config({ path: __dirname + '/.env' });
let sourcePath = path.join(__dirname, './src');
let outPath = path.join(__dirname, './build');
let isDeployedApp = (process.env.REACT_APP_ENVIRONMENT === "staging" || process.env.REACT_APP_ENVIRONMENT === "production");

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// defining exports
module.exports = {
  context: sourcePath,
  entry: {
    app: './main.tsx',
  },
  output: {
    path: outPath,
    filename: isDeployedApp ? 'bundle.[id].js' : 'bundle.[fullhash].[id].js',
    chunkFilename: isDeployedApp ? 'chunk.[id].js' : 'chunk.[fullhash].[id].js',
    assetModuleFilename: isDeployedApp ? 'assets.[id].[ext]' : 'assets.[fullhash].[id].[ext]'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
      assets: path.resolve(__dirname, 'src/assets/')
    }
  },
  module: {
    rules: [
      /*
       * Typsecript files.
       */
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          !isDeployedApp && {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
          'ts-loader'
        ].filter(Boolean),
      },
      /*
      * JavaScript files.
      */
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      /*
      * CSS Files.
      */
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      /*
      * misc Files.
      */
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          esModule: false
        }
      }
    ]
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/
        }
      },
      minSize: 10000,
      maxSize: 25000,
    },
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
    }),
    new MiniCssExtractPlugin({
      filename: isDeployedApp ? 'styles.[id].css' : 'styles.[fullhash].[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
    }),
    ...(!isDeployedApp ? [new ReactRefreshWebpackPlugin()] : []),
  ],
  devServer: {
    static: sourcePath,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    },
    client: {
      logging: 'warn',
    },
  },
  // https://webpack.js.org/configuration/devtool/
  devtool: isDeployedApp ? 'hidden-source-map' : 'eval-cheap-module-source-map'
};

