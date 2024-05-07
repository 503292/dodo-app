import React, { useState, useMemo, useEffect } from 'react';
import Divider from '../Divider/Divider';
import MathTask from './MathTask';
import Setting from './Setting';
import Answers from './Answers';
import Footer from './Footer';
import { generateMathTask, checkAnswer, getRandomAnswerArr } from './helper';

import css from './MathGame.module.scss';

const MIN = 0;
const MAX = 10;

const MathGame = () => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [answersArr, setAnswersArr] = useState(null);

  const mathTask = useMemo(() => {
    return generateMathTask(MIN, MAX, setAnswer);
    // eslint-disable-next-line
  }, [count]);

  useEffect(() => {
    setAnswersArr(getRandomAnswerArr(MIN, MAX, answer));
    // eslint-disable-next-line
  }, [count]);

  function handleSubmit(e) {
    e.preventDefault();
    checkAnswer(answer, userAnswer, setCount, setUserAnswer);
  }

  return (
    <form className={css.wrapGame} onSubmit={handleSubmit}>
      <Setting />
      <h2>Math Game</h2>
      <MathTask task={mathTask} value={userAnswer} setValue={setUserAnswer} />
      <Divider />
      <Answers answers={answersArr} handleClick={setUserAnswer} />
      <Divider />
      <Footer count={count} userAnswer={userAnswer} />
    </form>
  );
};

export default MathGame;
