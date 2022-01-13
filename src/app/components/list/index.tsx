import * as React from 'react';
import { ItemComponentActions, ItemComponent } from 'app/components/item';
import { TodoModel } from 'app/models';
import style from './style.module.css';

export interface ListComponentProps extends ItemComponentActions {
  todos: TodoModel[];
  completeAll: () => any;
}

export const ListComponent = (props: ListComponentProps) => {
  const handleToggleAll = (e: React.SyntheticEvent<any>) => {
    e.preventDefault();
    props.completeAll();
  };

  const renderToggleAll = () => {
    const { todos } = props;
    const completedCount = todos.length;
    if (todos.length > 0) {
      return (
        <input
          className={style.toggleAll}
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={handleToggleAll}
        />
      );
    }
  };

  const { todos, ...actions } = props;
  return (
    <section className={style.main}>
      {renderToggleAll()}
      <ul className={`${style.normal}`}>
        {todos.map((todo) => (
          <ItemComponent key={todo.id} todo={todo} {...actions} />
        ))}
      </ul>
    </section>
  );
};

export default ListComponent;
