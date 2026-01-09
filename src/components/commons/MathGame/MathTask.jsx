import React from 'react';
import { useBlink } from './useBlink';
import css from './MathGame.module.scss';

const MathTask = ({ mathTask, userAnswer }) => {
  const color = useBlink('tomato');

  return (
    <div className={css.mathTask}>
      <p>
        {mathTask} <br /> =
      </p>
      <div>
        {userAnswer === '' ? (
          <span>?</span>
        ) : (
          <p style={{ color }}>{userAnswer}</p>
        )}
      </div>
    </div>
  );
};

export default MathTask;
