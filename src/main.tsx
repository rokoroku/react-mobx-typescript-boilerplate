import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { TodoModel } from 'app/models';
import {RootStores} from 'app/stores';
import { NewApp } from 'app';
import "./assets/global.css";

// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true)
];

// prepare MobX stores
const history = createBrowserHistory();
export const stores = new RootStores(history, defaultTodos).getStoresInstances();

// prepare App
const App = NewApp(history)

ReactDOM.render(
  <Provider {...stores}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
