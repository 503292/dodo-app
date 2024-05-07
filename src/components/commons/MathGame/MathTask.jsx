import React from 'react';
import css from './MathGame.module.scss';

const MathTask = ({ task, value, setValue }) => {
  return (
    <div className={css.mathTask}>
      <p>
        {task} <br /> =
      </p>
      <input
        type="number"
        inputMode="numeric"
        pattern="\d*"
        placeholder="?"
        value={value}
        onChange={e => setValue(+e.target.value)}
      />
    </div>
  );
};

export default MathTask;
