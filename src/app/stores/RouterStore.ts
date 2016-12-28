import { History } from 'history';
import { RouterStore as BaseRouterStore, syncHistoryWithStore } from 'mobx-react-router';

type LocationDescriptor = History.LocationDescriptor;
type HashLocationDescriptor = LocationDescriptor & { hash?: string };

type PushAction = (nextLocation: LocationDescriptor) => RouterActions;
type ReplaceAction = (nextLocation: LocationDescriptor) => RouterActions;
type GoAction = (n: number) => RouterActions;
type GoForwardAction = () => RouterActions;
type GoBackAction = () => RouterActions;

export interface RouterActions {
  push: PushAction;
  replace: ReplaceAction;
  go: GoAction;
  goForward: GoForwardAction;
  goBack: GoBackAction;
}

export class RouterStore extends BaseRouterStore implements RouterActions {

  location: HashLocationDescriptor;
  push: PushAction;
  replace: ReplaceAction;
  go: GoAction;
  goForward: GoForwardAction;
  goBack: GoBackAction;

  constructor(public history?: History) {
    super();
    if (history) {
      this.history = syncHistoryWithStore(history, this);
    }
  }

};

export default RouterStore;
