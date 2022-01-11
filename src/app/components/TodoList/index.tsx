import * as React from 'react';
import {TodoActions, TodoItem} from 'app/components/TodoItem';
import {TodoModel} from 'app/models/TodoModel';
import style from './style.module.css';

export interface TodoListProps extends TodoActions {
    todos: TodoModel[];
    completeAll: () => any;
}

export const TodoList = (props: TodoListProps) => {

    const handleToggleAll = (e: React.SyntheticEvent<any>) => {
        e.preventDefault();
        props.completeAll();
    };

    const renderToggleAll = () => {
        const {todos} = props;
        const completedCount = todos.length;
        if (todos.length > 0) {
            return <input
                className={style.toggleAll}
                type="checkbox"
                checked={completedCount === todos.length}
                onChange={handleToggleAll}
            />;
        }
    }

    const {todos, ...actions} = props;
    return <section className={style.main}>
        {renderToggleAll()}
        <ul className={`${style.normal}`}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} {...actions} />
            ))}
        </ul>
    </section>;
}

export default TodoList;
