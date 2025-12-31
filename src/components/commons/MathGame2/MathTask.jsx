import React from 'react';
import css from './MathGame.module.scss';

const MathTask = ({ task, value }) => {
  return (
    <div className={css.mathTask}>
      <p>
        {task} <br /> =
      </p>

      <div>{value === '' ? <span>?</span> : <p>{value}</p>}</div>
    </div>
  );
};

export default MathTask;
