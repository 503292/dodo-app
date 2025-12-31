import React from 'react';

import css from './MathGame.module.scss';
const CircleButton = ({ text = '', onClick = () => {}, active, children }) => {
  const activeStyles = {
    background: '#ffeb3b',
    color: 'tomato',
  };

  return (
    <>
      <button
        className={css.circleBtn}
        style={active ? activeStyles : {}}
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
