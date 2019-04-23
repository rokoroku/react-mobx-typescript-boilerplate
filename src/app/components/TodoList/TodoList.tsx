import * as React from 'react';
import { TodoItem } from '../../components/TodoItem';
import { TodoModel } from '../..//models/TodoModel';
import style from './TodoList.module.css';

export interface TodoListProps {
  todos: TodoModel[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number, data: Partial<TodoModel>) => void;
  completeAll: () => any;
}

export interface TodoListState {}

export class TodoList extends React.Component<TodoListProps, TodoListState> {
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
