# Frontend Boilerplate with React, MobX and TypeScript

A react-mobx-webpack-postcss-typescript boilerplate based on TJ's [frontend-boilerplate](https://github.com/tj/frontend-boilerplate).

See also: [react-redux-typescript-boilerplate](https://github.com/rokoroku/react-redux-typescript-boilerplate)

## Contains

- [x] [Typescript](https://www.typescriptlang.org/) 2.1.4
- [x] [React](https://facebook.github.io/react/) 15.4.1
- [x] [React Router](https://github.com/ReactTraining/react-router/) 3.0.0
- [x] [Mobx](https://github.com/mobxjs/mobx)
- [x] [Mobx React](https://github.com/mobxjs/mobx-react)
- [x] [Mobx React Router](https://github.com/alisd23/mobx-react-router/)
- [x] [Mobx React Devtools](https://github.com/mobxjs/mobx-react-devtools)
- [x] [TodoMVC example](http://todomvc.com)

### Build tools

- [x] [Webpack](https://webpack.github.io) 2.2.0-rc.3
  - [x] [Tree Shaking](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)
  - [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [x] [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) 3.0.0-beta17
- [x] [PostCSS Loader](https://github.com/postcss/postcss-loader) 1.2.1
  - [x] [CSS next](https://github.com/MoOx/postcss-cssnext)
  - [x] [CSS modules](https://github.com/css-modules/css-modules)
- [x] [React Hot Loader](https://github.com/gaearon/react-hot-loader) 1.3.0
- [x] [ExtractText Plugin](https://github.com/webpack/extract-text-webpack-plugin) 2.0.0-beta.4
- [x] [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin) 2.24.1

## Setup

```
$ npm install
```

## Running

```
$ npm start
```

## Build

```
$ npm run build
```

## Note

- Since webpack 2 is still in beta, related dependencies can occur ``UNMET PEER DEPENDENCY`` errors.  
To avoid error, use **npm >=3.0.0**
- This boilerplate doesn't contain any testing frameworks. Use something that suits your taste.  
(such as [Mocha](https://github.com/mochajs/mocha), [Jasmine](https://github.com/jasmine/jasmine), or [Jest](https://github.com/facebook/jest))


# License

MIT
