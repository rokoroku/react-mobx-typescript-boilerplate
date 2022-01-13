import * as React from 'react';
import { useState } from 'react';
import * as classNames from 'classnames';
import style from './style.module.css';

export interface InputComponentProps {
  text?: string;
  placeholder?: string;
  newTodo?: boolean;
  editing?: boolean;
  onSave: (text: string) => any;
}

export const InputComponent = (props: InputComponentProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      props.onSave(text);
      if (props.newTodo) {
        setText('');
      }
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = (e) => {
    const text = e.target.value.trim();
    if (!props.newTodo) {
      props.onSave(text);
    }
  };

  const classes = classNames.default(
    {
      [style.edit]: props.editing,
      [style.new]: props.newTodo,
    },
    style.normal
  );

  return (
    <input
      className={classes}
      type="text"
      autoFocus
      placeholder={props.placeholder}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

export default InputComponent;
