import React, {useEffect, useState} from 'react';
import style from './style.module.css';
import {Header} from 'app/components/Header';
import {TodoList} from 'app/components/TodoList';
import {Footer} from 'app/components/Footer';
import {TODO_FILTER_LOCATION_HASH, TodoFilter} from 'app/constants';
import {useLocation, useNavigate} from "react-router";
import {useTodoStore} from "app/stores";

export const TodoAppContainer = (props: any) => {
    const [filter, setFilter] = useState(TodoFilter.ALL);

    useEffect(() => {
        // Anything in here is fired on component mount.
        checkLocationChange();
        return () => {
            // Anything in here is fired on component unmount.
            checkLocationChange();
        }
    }, [])

    const checkLocationChange = () => {
        const {hash} = useLocation();
        const newFilter = Object.keys(TODO_FILTER_LOCATION_HASH)
            .map((key: string) => Number(key) as TodoFilter)
            .find((f: TodoFilter) => TODO_FILTER_LOCATION_HASH[f] === hash);
        setFilter(newFilter)
    }

    const handleFilter = (filter: TodoFilter) => {
        const {hash} = useLocation();
        const navigate = useNavigate();
        const nextHash = TODO_FILTER_LOCATION_HASH[filter];
        if (hash !== nextHash) {
            navigate(nextHash);
        }
    };

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
    }

    const todoStore = useTodoStore();
    const {children} = props;
    const filteredTodos = getFilteredTodo(filter);

    let footer = null;
    if (todoStore.todos.length > 0) {
        footer = (<Footer
                filter={filter}
                activeCount={todoStore.activeTodos.length}
                completedCount={todoStore.completedTodos.length}
                onClearCompleted={todoStore.clearCompleted}
                onChangeFilter={handleFilter}
            />
        );
    }

    return <div className={`${style.normal}`}>
        <Header addTodo={todoStore.addTodo}/>
        <TodoList
            todos={filteredTodos}
            completeAll={todoStore.completeAll}
            deleteTodo={todoStore.deleteTodo}
            editTodo={todoStore.editTodo}
        />
        {footer}
        {children}
    </div>;
}

export default TodoAppContainer
