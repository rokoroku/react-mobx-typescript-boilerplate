import * as React from 'react';
import * as classNames from 'classnames';
import style from './style.module.css';
import {
  TODO_FILTER_TITLES,
  TODO_FILTER_TYPES,
  TodoFilter,
} from 'app/constants';

export interface FooterComponentProps {
  filter: TodoFilter;
  activeCount: number;
  completedCount: number;
  onChangeFilter: (filter: TodoFilter) => any;
  onClearCompleted: () => any;
}

export const FooterComponent = (props: FooterComponentProps) => {
  const renderTodoCount = () => {
    const { activeCount } = props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  };

  const renderFilterLink = (filter: TodoFilter) => {
    const title = TODO_FILTER_TITLES[filter];
    const { filter: selectedFilter, onChangeFilter } = props;
    const className = classNames.default({
      [style.selected]: filter === selectedFilter,
    });

    return (
      <a
        className={className}
        style={{ cursor: 'pointer' }}
        onClick={() => onChangeFilter(filter)}
      >
        {title}
      </a>
    );
  };

  const renderClearButton = () => {
    const { completedCount, onClearCompleted } = props;
    if (completedCount > 0) {
      return (
        <button className={style.clearCompleted} onClick={onClearCompleted} />
      );
    }
  };

  return (
    <footer className={style.normal}>
      {renderTodoCount()}
      <ul className={style.filters}>
        {TODO_FILTER_TYPES.map((filter) => (
          <li key={filter} children={renderFilterLink(filter)} />
        ))}
      </ul>
      {renderClearButton()}
    </footer>
  );
};

export default FooterComponent;
