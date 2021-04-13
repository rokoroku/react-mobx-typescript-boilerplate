import { History } from 'history';
import { TodoModel } from 'app/models';
import { TodoStore } from './TodoStore';
import { RouterStore } from './RouterStore';
import { STORE_TODO, STORE_ROUTER } from 'app/constants';

export class RootStores {

  routerStore: RouterStore;
  todoStore: TodoStore;

  constructor(history: History, defaultTodos?: TodoModel[]) {
    this.routerStore = new RouterStore(history);
    this.todoStore = new TodoStore(defaultTodos);
  }

  getStoresInstances(): { [store: string]: any } {
    return {
      [STORE_ROUTER]: this.routerStore,
      [STORE_TODO]: this.todoStore,
    };
  }
}

export default RootStores;
