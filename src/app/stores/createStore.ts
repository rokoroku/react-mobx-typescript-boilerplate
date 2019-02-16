import { History } from 'history';
import { TodoModel } from '../models';
import { TodoStore } from './TodoStore';
import { RouterStore } from './RouterStore';

export function createStores(history: History, defaultTodos: TodoModel[]) {
  const todoStore = new TodoStore(defaultTodos);
  const routerStore = new RouterStore(history);
  return {
    todoStore,
    routerStore
  };
}
