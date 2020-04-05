import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { App } from 'app';

// prepare history
const history = createBrowserHistory();

// render react DOM
ReactDOM.render(<App history={history} />, document.getElementById('root'));
