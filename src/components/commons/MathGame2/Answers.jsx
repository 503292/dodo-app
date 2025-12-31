import React from 'react';
import css from './MathGame.module.scss';

const Answers = ({
  answers,
  handleClick = () => {},
  checkAnswer = () => {},
}) => {
  return (
    <div className={css.wrapAnswers}>
      {answers?.map((answer, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => handleClick(answer)}
          onDoubleClick={() => checkAnswer()}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
