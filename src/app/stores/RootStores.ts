import { History } from 'history';
import { NewStore, TodoStore } from './TodoStore';
import { RouterStore } from './RouterStore';
import { STORE_TODO, STORE_ROUTER } from 'app/constants';

export class RootStores {

  routerStore: RouterStore;
  todoStore: TodoStore;

  constructor(history: History) {
    this.routerStore = new RouterStore(history);
    this.todoStore = NewStore();
  }

  getStoresInstances(): { [store: string]: any } {
    return {
      [STORE_ROUTER]: this.routerStore,
      [STORE_TODO]: this.todoStore,
    };
  }
}

export default RootStores;
