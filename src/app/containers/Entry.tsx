import * as React from 'react';

import { App } from './App';
import { TodoApp } from './TodoApp';

export function Entry() {
    return <App>
        <TodoApp />
    </App>;
}