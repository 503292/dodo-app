import React, { useState, useMemo, useEffect } from 'react';
import Divider from '../Divider/Divider';
import MathTask from './MathTask';
import Setting from './Setting';
import Answers from './Answers';
import Footer from './Footer';
import { generateMathTask, checkAnswer, getRandomAnswerArr } from './helper';

import css from './MathGame.module.scss';

const MathGame = () => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [answersArr, setAnswersArr] = useState(null);
  const [selectOperator, setSelectOperator] = useState('+');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  const mathTask = useMemo(() => {
    return generateMathTask(min, max, setAnswer, selectOperator);
    // eslint-disable-next-line
  }, [count, selectOperator, min, max]);

  useEffect(() => {
    setAnswersArr(getRandomAnswerArr(min, max, answer, selectOperator));
    // eslint-disable-next-line
  }, [count, selectOperator, min, max]);

  function handleSubmit(e) {
    e.preventDefault();
    checkAnswer(answer, userAnswer, setCount, setUserAnswer, mathTask);
  }

  return (
    <form className={css.wrapGame} onSubmit={handleSubmit}>
      <h2>Math Game</h2>
      <Setting
        selectOperator={selectOperator}
        setSelectOperator={setSelectOperator}
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
      />
      <MathTask task={mathTask} value={userAnswer} setValue={setUserAnswer} />
      <Divider />
      <Answers answers={answersArr} handleClick={setUserAnswer} />
      <Divider />
      <Footer count={count} userAnswer={userAnswer} />
    </form>
  );
};

export default MathGame;
