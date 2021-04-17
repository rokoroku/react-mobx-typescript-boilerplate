import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import {RootStores} from 'app/stores';
import { NewApp } from 'app';
import "./assets/global.css";

// prepare MobX stores
const history = createBrowserHistory();
export const stores = new RootStores(history).getStoresInstances();

// prepare App
const App = NewApp(history)

ReactDOM.render(
  <Provider {...stores}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
