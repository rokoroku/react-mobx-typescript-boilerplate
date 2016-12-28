import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Header } from '../../components/Header';
import { TodoList } from '../../components/TodoList';
import { Footer } from '../../components/Footer';
import { TodoModel } from '../../models/TodoModel';
import { TodoStore, RouterStore } from '../../stores';
import { STORE_TODO, STORE_ROUTER } from '../../constants/stores';
import { TodoFilter, TODO_FILTER_LOCATION_HASH } from '../../constants/todos';
import * as style from './style.css';

export interface TodoAppProps {
  todoStore: TodoStore;
  router: RouterStore;
}

export interface TodoAppState {
  filter: TodoFilter;
}

@inject((store) => ({
  todoStore: store[STORE_TODO],
  router: store[STORE_ROUTER]
}))
@observer
export class TodoApp extends React.Component<TodoAppProps, TodoAppState> {

  constructor(props: TodoAppProps, context: any) {
    super(props, context);
    this.state = { filter: TodoFilter.ALL };
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentWillReceiveProps(nextProps: TodoAppProps, nextContext: any) {
    const { router } = nextProps;
    const filter = Object.keys(TODO_FILTER_LOCATION_HASH)
      .map((key) => Number(key) as TodoFilter)
      .find((filter) => TODO_FILTER_LOCATION_HASH[filter] === router.location.hash);
    this.setState({ filter });
  }

  handleFilter(filter: TodoFilter) {
    const { router } = this.props;
    const currentHash = router.location.hash;
    const nextHash = TODO_FILTER_LOCATION_HASH[filter];
    if (currentHash !== nextHash) {
      this.props.router.replace(nextHash);
    }
  }

  getFilteredTodo(filter: TodoFilter) {
    const { todoStore } = this.props;
    switch (filter) {
      case TodoFilter.ACTIVE: return todoStore.activeTodos;
      case TodoFilter.COMPLETED: return todoStore.completedTodos;
      default: return todoStore.todos;
    }
  }

  render() {
    const { todoStore, children } = this.props;
    const { filter } = this.state;
    const filteredTodos = this.getFilteredTodo(filter);

    const footer = todoStore.todos.length ? (
      <Footer filter={filter}
        activeCount={todoStore.activeTodos.length}
        completedCount={todoStore.completedTodos.length}
        onClearCompleted={todoStore.clearCompleted}
        onChangeFilter={this.handleFilter} />
    ) : undefined;

    return (
      <div className={style.normal} >
        <Header addTodo={todoStore.addTodo} />
        <TodoList todos={filteredTodos}
          completeAll={todoStore.completeAll}
          deleteTodo={todoStore.deleteTodo}
          editTodo={todoStore.editTodo} />
        {footer}
        {children}
      </div>
    );
  }
};
