import React from 'react'
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {TodoAppContainer} from 'app/containers/TodoApp';
import {observer} from "mobx-react";

const AppContainer = observer(() => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={TodoAppContainer}/>
        </Routes>
    </BrowserRouter>;
})

// render react DOM
export function NewApp(): () => JSX.Element {
    return hot(() => <AppContainer/>);
}
