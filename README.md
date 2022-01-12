# Frontend Boilerplate with React, MobX, TypeScript & Webpack

A bare minimum react-mobx-webpack-typescript boilerplate with TodoMVC example.

Note that this project does not include **Server-Side Rendering**,  **Testing Frameworks** and other stuffs that makes the package unnecessarily complicated.

Ideal for creating React apps from the scratch.

> IMPORTANT: The initial project has been created and developed at: [react-mobx-typescript-boilerplate](https://github.com/rokoroku/react-mobx-typescript-boilerplate). My work was all about updating the project regarding some points such as package json versions, store persistence, css module approach loading, etc.

## Functionalities

- [x] Developed using Typescript
- [x] Functional Components approach used
- [x] Clean architecture (containers, components, stores, etc)
- [x] Build and run using webpack
- [x] Mobx (with data persistence) consumed as "state"
- [x] Environment & Configuration available

## Contains

- [x] [Typescript](https://www.typescriptlang.org/) 4.5.4
- [x] [React](https://facebook.github.io/react/) 17.0.2
- [x] [React Router](https://github.com/ReactTraining/react-router) 6.2.1
- [x] [Mobx](https://github.com/mobxjs/mobx) 6.3.12
- [x] [Mobx React](https://github.com/mobxjs/mobx-react) 7.2.1

### Build tools

- [x] [Webpack](https://webpack.github.io) 5.37.1
  - [x] [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
  - [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [x] [Typescript Loader](https://github.com/TypeStrong/ts-loader) 9.2.1
- [x] [PostCSS Loader](https://github.com/postcss/postcss-loader) 5.3.1
  - [x] [PostCSS Preset Env](https://preset-env.cssdb.org/)
  - [x] [CSS modules](https://github.com/css-modules/)
- [x] [React Hot Loader](https://github.com/gaearon/react-hot-loader) 4.13.0
- [x] [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) 1.6.0
- [x] [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin) 5.3.1


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

## Code Format

```
$ npm run prettier
```

## Updates & Help

I still have a couple of points I would like to work on:

- **Webpack (maybe) can be optimized**: I am a Golang, C/C++, C# backend developer, working on monolithic/microservices architecture etc... Really far from webpack/javascript/web developement so I might not have done the best job while upgrading the `webpack.config.js` file, so feel free to let me know if anything can be achieved in a better way!
- **The package json could be optimized**: I know there is Dependencies, devDependencies etc. I am not really sure from my experience to clearly understand the difference with it but if someone could help me to better organize the dependencies between those two, I would appreciate.

# License

MIT

