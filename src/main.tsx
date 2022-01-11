import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Root, RootStoreProvider} from 'app/stores';
import {NewApp} from 'app';
import "./assets/global.css";

// prepare MobX store(s)
export const store = new Root();

// prepare App
const App = NewApp()

ReactDOM.render(
    <RootStoreProvider {...store}>
        <App/>
    </RootStoreProvider>,
    document.getElementById('root')
);
