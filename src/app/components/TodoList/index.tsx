import * as React from 'react';
import { Footer } from '../Footer';
import { TodoItem, TodoActions } from '../TodoItem';
import { TodoModel } from '../../models/TodoModel';
import * as style from './style.css';

export interface TodoListProps extends TodoActions {
  todos: TodoModel[];
  completeAll: () => any;
};

export interface TodoListState {

};

export class TodoList extends React.Component<TodoListProps, TodoListState> {

  constructor(props?: TodoListProps, context?: any) {
    super(props, context);
    this.handleToggleAll = this.handleToggleAll.bind(this);
  }

  handleToggleAll(e: React.SyntheticEvent<any>) {
    e.preventDefault();
    this.props.completeAll();
  }

  renderToggleAll() {
    const { todos, ...actions } = this.props;
    const completedCount = todos.length;
    if (todos.length > 0) {
      return (
        <input
          className={style.toggleAll}
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={this.handleToggleAll} />
      );
    }
  }

  render() {
    const { todos, ...actions } = this.props;
    return (
      <section className={style.main}>
        {this.renderToggleAll()}
        <ul className={style.normal}>
          {todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    );
  }
}

export default TodoList;
