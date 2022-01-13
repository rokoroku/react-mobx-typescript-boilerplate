import * as React from 'react';
import { InputComponent } from 'app/components/input';
import { TodoModel } from 'app/models';
import { config } from 'app/config';
import { toString as appEnvToString } from 'app/constants';

export interface HeaderComponentProps {
  addTodo: (todo: Partial<TodoModel>) => any;
}

export const HeaderComponent = (props: HeaderComponentProps) => {
  const handleSave = (text: string) => {
    if (text.length) {
      props.addTodo({ text });
    }
  };

  return (
    <header>
      <h1>Todos</h1>
      <h2>(environment: {appEnvToString(config.environment)})</h2>
      <InputComponent
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default HeaderComponent;
