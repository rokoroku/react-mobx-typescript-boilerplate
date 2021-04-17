import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router-dom';
import { TodoApp } from 'app/containers/TodoApp';
import { History } from 'history';

interface AppContainerProps {
  history: History;
}

interface AppContainerState {

}

class AppContainer extends React.Component<AppContainerProps, AppContainerState> {
  render() {
    return <Router history={this.props.history}>
        <Switch>
          <Route path="/" component={TodoApp} />
        </Switch>
      </Router>;
  }
}

// render react DOM
export function NewApp(history: History): () => JSX.Element {
  return hot(() => <AppContainer history={history}/>);
}
