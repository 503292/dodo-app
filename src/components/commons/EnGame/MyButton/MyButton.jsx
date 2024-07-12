/* eslint-disable */
import React from 'react';
import css from './MyButton.module.scss';

const MyButton = ({ active, disabled, error, children, ...props }) => {
  const buttonClasses = [css.button];

  if (active) {
    buttonClasses.push(css.active);
  }

  if (disabled) {
    buttonClasses.push(css.disabled);
  }

  if (error) {
    buttonClasses.push(css.error);
  }
  return (
    <button className={`${buttonClasses.join(' ')} ${css.btn}`} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
