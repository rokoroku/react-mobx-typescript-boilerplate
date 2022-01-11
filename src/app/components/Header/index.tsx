import * as React from 'react';
import {TodoTextInput} from 'app/components/TodoTextInput';
import {TodoModel} from 'app/models/TodoModel';

export interface HeaderProps {
    addTodo: (todo: Partial<TodoModel>) => any;
}

export const Header = (props: HeaderProps) => {

    const handleSave = (text: string) => {
        if (text.length) {
            props.addTodo({text});
        }
    };

    return <header>
        <h1>Todos</h1>
        <TodoTextInput
            newTodo
            onSave={handleSave}
            placeholder="What needs to be done?"
        />
    </header>;
}

export default Header;
