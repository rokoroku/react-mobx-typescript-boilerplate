import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RootStore, RootStoreProvider } from 'app/stores';
import { App } from 'app';
import './assets/global.css';

// prepare MobX store(s)
export const store = new RootStore();

ReactDOM.render(
  <RootStoreProvider {...store}>
    <App />
  </RootStoreProvider>,
  document.getElementById('root')
);
