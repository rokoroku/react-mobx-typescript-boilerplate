import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from './containers/App';
import { TodoApp } from './containers/TodoApp';
import { TodoModel } from './models/TodoModel';
import { TodoStore, RouterStore } from './stores';
import { STORE_TODO, STORE_ROUTER } from './constants/stores';
import { TodoFilter } from './constants/todos';

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
ReactDOM.render(
  <Provider {...rootStores} >
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={TodoApp} />
      </Route>
    </Router>
  </Provider >,
  document.getElementById('root')
);