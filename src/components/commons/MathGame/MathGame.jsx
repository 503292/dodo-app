import React, { useState, useMemo, useEffect, Fragment } from 'react';
import Divider from '../Divider/Divider';
import { getRandomAnswerArr, randomIntFromInterval } from './helper';

import css from './MathGame.module.scss';

const MIN = 0;
const MAX = 10;

const MathGame = () => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [answersArr, setAnswersArr] = useState([1, 2, 3, 4]);

  const mathTask = useMemo(() => {
    const firstNum = randomIntFromInterval(MIN, MAX);
    const secondNum = randomIntFromInterval(MIN, MAX);
    setAnswer(firstNum + secondNum);
    return `${firstNum} + ${secondNum}`;
  }, [count]);

  useEffect(() => {
    if (answer) {
      setAnswersArr(getRandomAnswerArr(MIN, MAX, answer));
    }
  }, [answer]);

  function handleSubmit(e) {
    e.preventDefault();
    validateAnswer();
  }

  const validateAnswer = () => {
    if (answer === +inputValue) {
      setCount(prev => (prev += 1));
      setInputValue('');
    } else {
      // TODO add toast (refact global)
      console.log('try one more');
    }
  };

  return (
    <form className={css.wrapGame} onSubmit={handleSubmit}>
      <h2>Math Game</h2>
      <div className={css.mathTask}>
        <p>
          {mathTask} <br /> =
        </p>
        <input
          type="number"
          inputMode="numeric"
          pattern="\d*"
          placeholder="?"
          value={inputValue}
          onChange={e => setInputValue(+e.target.value)}
        />
      </div>
      <Divider />
      <AnswerBlock answersArr={answersArr} handleClick={setInputValue} />

      <Divider />
      <div className={css.footer}>
        <span>Лічильник: {count}</span>
        <button type="submit" className={`animateBtn`}>
          Відповісти
        </button>
      </div>
    </form>
  );
};

export default MathGame;

const AnswerBlock = ({ answersArr, handleClick = () => {} }) => {
  return (
    <div className={css.wrapAnswers}>
      {answersArr?.map((answer, idx) => (
        <button key={idx} type="button" onClick={() => handleClick(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
};
