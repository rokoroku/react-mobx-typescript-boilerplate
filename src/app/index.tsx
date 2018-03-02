import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, Switch } from 'react-router';
import { Root } from './containers/Root';
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
  new TodoModel('Use React', true)
];

// prepare MobX stores
const history = createBrowserHistory();
const todoStore = new TodoStore(defaultTodos);
const routerStore = new RouterStore(history);
const rootStores = {
  [STORE_TODO]: todoStore,
  [STORE_ROUTER]: routerStore
};

// render react DOM
const HotWrapper = hot(module)(() => (
  <Provider {...rootStores}>
    <Root>
      <Router history={history}>
        <Switch>
          <Route path="/" component={TodoApp} />
        </Switch>
      </Router>
    </Root>
  </Provider>
));

ReactDOM.render(<HotWrapper />, document.getElementById('root'));
