import * as React from 'react';
import { TodoItem, TodoActions } from 'app/components/TodoItem';
import { TodoModel } from 'app/models/TodoModel';
import * as style from './style.css';

export interface TodoListProps extends TodoActions {
  todos: TodoModel[];
  completeAll: () => any;
}

export interface TodoListState {}

export class TodoList extends React.Component<TodoListProps, TodoListState> {
  constructor(props?: TodoListProps, context?: any) {
    super(props, context);
  }

  private handleToggleAll = (e: React.SyntheticEvent<any>) => {
    e.preventDefault();
    this.props.completeAll();
  };

  renderToggleAll() {
    const { todos } = this.props;
    const completedCount = todos.length;
    if (todos.length > 0) {
      return (
        <input
          className={style.toggleAll}
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={this.handleToggleAll}
        />
      );
    }
  }

  render() {
    const { todos, ...actions } = this.props;
    return (
      <section className={style.main}>
        {this.renderToggleAll()}
        <ul className={style.normal}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} {...actions} />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
