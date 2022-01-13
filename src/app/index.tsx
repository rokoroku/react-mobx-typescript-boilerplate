import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoContainer } from 'app/containers';
import { observer } from 'mobx-react';

export const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
      </Routes>
    </BrowserRouter>
  );
});
