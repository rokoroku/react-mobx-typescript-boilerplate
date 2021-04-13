import * as React from 'react';
import { config } from 'app/config/config';
import { APP_ENVIRONMENT } from 'app/constants';

export interface RootProps {

}

export interface RootState {
  /* empty */
}

export class Root extends React.Component<RootProps, RootState> {
  renderDevTool() {
    if (config.environment === APP_ENVIRONMENT.Local) {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
        {this.renderDevTool()}
      </div>
    );
  }
}
