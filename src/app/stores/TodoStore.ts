import { action, computed, makeAutoObservable, observable } from 'mobx';
import { TodoModel } from 'app/models';
import { persistence, StorageAdapter } from 'mobx-persist-store';
import { PersistenceStore } from 'mobx-persist-store/lib/types';
import { readStore, writeStore } from 'app/stores/persistence';

export class TodoStore {

  @observable public todos: TodoModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get activeTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }

  @computed
  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  @action
  addTodo = (item: Partial<TodoModel>): void => {
    console.log(item);
    this.todos.push(new TodoModel(item.text, item.completed));
  };

  @action
  editTodo = (id: number, data: Partial<TodoModel>): void => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        if (typeof data.completed == 'boolean') {
          todo.completed = data.completed;
        }
        if (typeof data.text == 'string') {
          todo.text = data.text;
        }
      }
      return todo;
    });
  };

  @action
  deleteTodo = (id: number): void => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  @action
  completeAll = (): void => {
    this.todos = this.todos.map((todo) => ({ ...todo, completed: true }));
  };

  @action
  clearCompleted = (): void => {
    this.todos = this.todos.filter((todo) => !todo.completed);
  };
}

export function NewStore(): PersistenceStore<TodoStore> {
  return persistence({
    name: 'TodoStore',
    properties: ['todos'],
    adapter: new StorageAdapter({
      read: readStore,
      write: writeStore
    }),
    reactionOptions: {
      // optional
      delay: 200
    }
  })(new TodoStore());
}
