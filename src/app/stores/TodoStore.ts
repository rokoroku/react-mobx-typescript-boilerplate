import { observable, computed, action } from 'mobx';
import { TodoModel } from '../models';

export class TodoStore {
  constructor(fixtures: TodoModel[]) {
    this.todos = fixtures;
  }

  @observable public todos: Array<TodoModel>;

  @computed
  get activeTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }

  @computed
  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  @action
  addTodo = (item: { text: string }): void => {
    this.todos.push(new TodoModel(item.text, false));
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

export default TodoStore;
