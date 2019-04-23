import * as React from 'react';
import style from './TodoApp.module.css';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { Header, TodoList, Footer } from '../../components/';
import { TodoStore, RouterStore } from '../../stores';
import { TODO_FILTER_LOCATION_HASH, TodoFilter } from '../../constants';

export interface TodoAppProps extends RouteComponentProps<any> {
  routerStore: RouterStore;
  todoStore: TodoStore;
}

export interface TodoAppState {
  filter: TodoFilter;
}

@inject('todoStore', 'routerStore')
@observer
export class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps, context: any) {
    super(props, context);
    this.state = { filter: TodoFilter.ALL };
  }

  componentWillMount() {
    this.checkLocationChange();
  }

  componentWillReceiveProps(nextProps: {}, nextContext: any) {
    this.checkLocationChange();
  }

  checkLocationChange() {
    const { routerStore } = this.props;

    const filter = Object.keys(TODO_FILTER_LOCATION_HASH)
      .map((key) => Number(key) as TodoFilter)
      .find(
        (filter) =>
          TODO_FILTER_LOCATION_HASH[filter] === routerStore.location.hash
      ) as TodoFilter;
    this.setState({ filter });
  }

  private handleFilter = (filter: TodoFilter) => {
    const { routerStore } = this.props;
    const currentHash = routerStore.location.hash;
    const nextHash = TODO_FILTER_LOCATION_HASH[filter];
    if (currentHash !== nextHash) {
      routerStore.replace(nextHash);
    }
  };

  getFilteredTodo(filter: TodoFilter) {
    const { todoStore } = this.props;
    switch (filter) {
      case TodoFilter.ACTIVE:
        return todoStore.activeTodos;
      case TodoFilter.COMPLETED:
        return todoStore.completedTodos;
      default:
        return todoStore.todos;
    }
  }

  render() {
    const { todoStore } = this.props;
    const { children } = this.props;
    const { filter } = this.state;
    const filteredTodos = this.getFilteredTodo(filter);

    const footer = todoStore.todos.length && (
      <Footer
        filter={filter}
        activeCount={todoStore.activeTodos.length}
        completedCount={todoStore.completedTodos.length}
        onClearCompleted={todoStore.clearCompleted}
        onChangeFilter={this.handleFilter}
      />
    );

    return (
      <div className={style.normal}>
        <Header addTodo={todoStore.addTodo} />
        <TodoList
          todos={filteredTodos}
          completeAll={todoStore.completeAll}
          deleteTodo={todoStore.deleteTodo}
          editTodo={todoStore.editTodo}
        />
        {footer}
        {children}
      </div>
    );
  }
}
