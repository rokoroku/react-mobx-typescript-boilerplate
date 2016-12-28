import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { TodoFilter } from '../../models/TodoModel'

const FILTER_TITLES = {
  [TodoFilter.ALL]: 'All',
  [TodoFilter.ACTIVE]: 'Active',
  [TodoFilter.COMPLETED]: 'Completed'
};

const FILTER_TYPES = [
  TodoFilter.ALL,
  TodoFilter.ACTIVE,
  TodoFilter.COMPLETED
];

export interface FooterProps {
  filter: TodoFilter;
  activeCount: number;
  completedCount: number;
  onChangeFilter: (filter: TodoFilter) => any;
  onClearCompleted: () => any;
};

export interface FooterState {
  /* empty */
}

export class Footer extends React.Component<FooterProps, FooterState> {

  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter: TodoFilter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onChangeFilter } = this.props;
    const className = classNames({
      [style.selected]: filter === selectedFilter
    });

    return (
      <a className={className}
        style={{ cursor: 'pointer' }}
        onClick={() => onChangeFilter(filter)}>
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className={style.clearCompleted} onClick={onClearCompleted}>
          Clear completed
        </button>
      );
    }
  }

  render() {
    return (
      <footer className={style.normal}>
        {this.renderTodoCount()}
        <ul className={style.filters}>
          {FILTER_TYPES.map((filter) =>
            <li key={filter} children={this.renderFilterLink(filter)} />
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}

export default Footer;
