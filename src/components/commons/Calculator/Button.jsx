import React from 'react';
import css from './Calculator.module.scss';

function Button({ value, onClick, className }) {
  const buttonClasses = [css.button];

  if (className) {
    if (typeof className === 'string') {
      buttonClasses.push(className);
    } else if (typeof className === 'object') {
      for (const key in className) {
        if (className[key]) {
          buttonClasses.push(css[key]); // Access CSS module classes using bracket notation
        }
      }
    }
  }
  return (
    <button className={buttonClasses.join(' ')} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default Button;
