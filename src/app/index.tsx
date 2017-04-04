import * as React from 'react';
import { render as ReactDomRender } from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Entry } from './containers/Entry';
import { TodoModel } from './models/TodoModel';
import { TodoStore, RouterStore } from './stores';
import { STORE_TODO, STORE_ROUTER } from './constants/stores';
import { TodoFilter } from './constants/todos';
import { AppContainer } from 'react-hot-loader';

// enable MobX strict mode
useStrict(true);

// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true),
];

// prepare MobX stores
const todoStore = new TodoStore(defaultTodos);
const routerStore = new RouterStore(browserHistory);
const rootStores = {
  [STORE_TODO]: todoStore,
  [STORE_ROUTER]: routerStore
};

// render react DOM
const render = () => {
  ReactDomRender(
    <AppContainer>
      <Provider {...rootStores} >
        <Entry />
      </Provider >
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

if ((module as any).hot) {
  (module as any).hot.accept('./containers/Entry', () => { render(); })
}