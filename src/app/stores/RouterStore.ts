import { HistoryBase } from 'react-router';
import { RouterStore as BaseRouterStore, syncHistoryWithStore } from 'mobx-react-router';

export class RouterStore extends BaseRouterStore {
  constructor(history?: HistoryBase) {
    super();
    if (history) {
      this.history = syncHistoryWithStore(history, this);
    }
  }
};

export default RouterStore;
