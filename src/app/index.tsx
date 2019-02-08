import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Root } from './containers/Root';
import { TodoApp } from './containers/TodoApp';

// render react DOM
export const App = () => (
  <Root>
    <Router>
      <Switch>
        <Route path="/" component={TodoApp} />
      </Switch>
    </Router>
  </Root>
);
