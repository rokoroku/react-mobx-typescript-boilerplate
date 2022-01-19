import React from 'react';
import style from './style.module.css';
import {
  FooterComponent,
  HeaderComponent,
  ListComponent,
} from 'app/components';
import { TodoFilter } from 'app/constants';
import { useTodoStore } from 'app/stores';
import { observer } from 'mobx-react';

export const TodoContainer = observer((props) => {
  const getFilteredTodo = (filter: TodoFilter) => {
    const todoStore = useTodoStore();
    switch (filter) {
      case TodoFilter.ACTIVE:
        return todoStore.activeTodos;
      case TodoFilter.COMPLETED:
        return todoStore.completedTodos;
      default:
        return todoStore.todos;
    }
  };

  const todoStore = useTodoStore();
  const { content } = props;
  const filteredTodos = getFilteredTodo(todoStore.currentFilter);

  let footer = null;
  if (todoStore.todos.length > 0) {
    footer = (
      <FooterComponent
        filter={todoStore.currentFilter}
        activeCount={todoStore.activeTodos.length}
        completedCount={todoStore.completedTodos.length}
        onClearCompleted={todoStore.clearCompleted}
        onChangeFilter={todoStore.setFilter}
      />
    );
  }

  return (
    <div className={style.normal}>
      <HeaderComponent addTodo={todoStore.addTodo} />
      <ListComponent
        todos={filteredTodos}
        completeAll={todoStore.completeAll}
        deleteTodo={todoStore.deleteTodo}
        editTodo={todoStore.editTodo}
      />
      {footer}
      {content}
    </div>
  );
});
