import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router-dom';
import { Root } from 'app/containers/Root';
import { TodoApp } from 'app/containers/TodoApp';
import { History } from 'history';

interface AppContainerProps {
  history: History;
}

interface AppContainerState {

}

class AppContainer extends React.Component<AppContainerProps, AppContainerState> {
  render() {
    return <Root>
      <Router history={this.props.history}>
        <Switch>
          <Route path="/" component={TodoApp} />
        </Switch>
      </Router>
    </Root>;
  }
}

// render react DOM
export function NewApp(history: History): () => JSX.Element {
  return hot(() => <AppContainer history={history}/>);
}
