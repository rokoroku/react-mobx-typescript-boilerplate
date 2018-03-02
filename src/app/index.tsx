import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, Switch } from 'react-router';
import { TodoModel } from 'app/models';
import { TodoStore, RouterStore } from 'app/stores';
import { Root } from 'app/containers/Root';
import { TodoApp } from 'app/containers/TodoApp';
import { STORE_TODO, STORE_ROUTER, TodoFilter } from 'app/constants';

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
