import * as React from 'react';
import {useState} from 'react';
import * as classNames from 'classnames';
import {TodoTextInput} from 'app/components/TodoTextInput';
import {TodoModel} from 'app/models/TodoModel';
import style from './style.module.css';

export interface TodoActions {
    editTodo: (id: number, data: Partial<TodoModel>) => any;
    deleteTodo: (id: number) => any;
}

export interface TodoProps extends TodoActions {
    todo: TodoModel;
}

export const TodoItem = (props: TodoProps) => {

    const [editing, setEditing] = useState(false);

    const handleDoubleClick = (_: React.SyntheticEvent<any>) => {
        setEditing(true);
    };

    const handleToggleCheckbox = (e: React.SyntheticEvent<any>) => {
        const {todo} = props;
        const target = e.target as any;
        if (
            target &&
            target.checked !== undefined &&
            target.checked !== todo.completed
        ) {
            updateTodo({completed: target.checked});
        }
    };

    const handleClickDeleteButton = (e: React.SyntheticEvent<any>) => {
        const {todo, deleteTodo} = props;
        deleteTodo(todo.id);
    };

    const updateTodo = (data: Partial<TodoModel>) => {
        const {todo} = props;
        if (data.text !== undefined && data.text.trim().length === 0) {
            props.deleteTodo(todo.id);
        } else {
            props.editTodo(todo.id, data);
        }
        setEditing(false);
    };

    const {todo} = props;

    const element = editing ? (
        <TodoTextInput
            text={todo.text}
            editing={editing}
            onSave={(text) => updateTodo({text})}
        />
    ) : (
        <div className={style.view}>
            <input
                className={style.toggle}
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleCheckbox}
            />

            <label onDoubleClick={handleDoubleClick}>{todo.text}</label>

            <button
                className={style.destroy}
                onClick={handleClickDeleteButton}
            />
        </div>
    );

    const classes = classNames.default({
        [style.completed]: todo.completed,
        [style.editing]: editing,
        [style.normal]: editing
    });

    return <li className={classes}>{element}</li>;
}

export default TodoItem;
