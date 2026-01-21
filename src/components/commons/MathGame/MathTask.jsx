import React from 'react';

import css from './MathGame.module.scss';

const COLORS = {
  correct: '#87c33b',
  wrong: 'salmon',
};

const MathTask = ({ mathTask, userAnswer, answerStatus }) => {
  return (
    <div className={css.mathTask}>
      <p>
        {mathTask.question} <br /> =
      </p>

      <div>
        {userAnswer === '' ? (
          <span>?</span>
        ) : (
          <p style={{ color: COLORS[answerStatus] }}>{userAnswer}</p>
        )}
      </div>
    </div>
  );
};

export default MathTask;
