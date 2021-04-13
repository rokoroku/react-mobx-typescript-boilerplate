let webpack = require('webpack');
let path = require('path');

// variables
let dotenv = require('dotenv').config({ path: __dirname + '/.env' });
let sourcePath = path.join(__dirname, './src');
let outPath = path.join(__dirname, './build');
let isDeployedApp = (process.env.REACT_APP_ENVIRONMENT === 'staging' || process.env.REACT_APP_ENVIRONMENT === 'production');

// plugins
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

// For our css modules these will be locally scoped
const cssModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 2,
    sourceMap: true
  }
};
// For our normal CSS files we would like them globally scoped
const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: 'global',
    importLoaders: 2,
    sourceMap: true
  }
};
// To avoid duplicate definition
const styleLoader = isDeployedApp ? {
  loader: MiniCssExtractPlugin.loader,
  options: {
    esModule: false
  }
} : 'style-loader';
const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      ident: 'postcss',
      plugins: [
        require('postcss-import')({ addDependencyTo: webpack }),
        require('postcss-url')(),
        require('postcss-reporter')(),
        require('postcss-browser-reporter')({
          disabled: isDeployedApp
        })
      ]
    }
  }
};

module.exports = {
  context: sourcePath,
  entry: {
    app: './main.tsx'
  },
  output: {
    path: outPath,
    filename: isDeployedApp ? 'bundle.[name].[contenthash].js' : 'bundle.[name].[fullhash].js',
    chunkFilename: isDeployedApp ? 'chunk.[id].[contenthash].js' : 'chunk.[id].[fullhash].js',
    assetModuleFilename: isDeployedApp ? '[contenthash][ext][query]' : '[fullhash][ext][query]'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'],
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
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] }
          },
          'ts-loader'
        ].filter(Boolean)
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
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
          styleLoader,
          cssLoader,
          postCSSLoader
        ]
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          styleLoader,
          cssModuleLoader,
          postCSSLoader
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
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          esModule: false
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/
        }
      }
    },
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed)
    }),
    new MiniCssExtractPlugin({
      filename: isDeployedApp ? 'styles.[contenthash].css' : 'styles.[fullhash].css'
    }),
    new HtmlWebpackPlugin({
      template: 'assets/index.html'
    })
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal',
    clientLogLevel: 'warning'
  },
  // https://webpack.js.org/configuration/devtool/
  devtool: isDeployedApp ? 'hidden-source-map' : 'eval-cheap-module-source-map'
};
