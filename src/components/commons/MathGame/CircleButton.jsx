import React from 'react';

import css from './MathGame.module.scss';
const CircleButton = ({ text = '', onClick = () => {}, active, children }) => {
  return (
    <>
      <button
        className={css.circleBtn}
        style={active ? { background: '#ffeb3b' } : {}}
        type="button"
        onClick={() => onClick()}
      >
        {children}
        {text}
      </button>
    </>
  );
};

export default CircleButton;
