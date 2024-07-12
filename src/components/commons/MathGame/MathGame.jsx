import React, { useState, useMemo, useEffect } from 'react';
import Divider from '../Divider/Divider';
import MathTask from './MathTask';
import Setting from './Setting';
import Answers from './Answers';
import Footer from './Footer';
import { generateMathTask, checkAnswer, getRandomAnswerArr } from './helper';
import { useLocalStorage } from './useLocalStorage';

import css from './MathGame.module.scss';

const MIN = 0;
const MAX = 10;
const OPERATOR = '+';
const COUNT = 0;

const MathGame = () => {
  const { getSettings, updateSettings } = useLocalStorage();
  const [answer, setAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [answersArr, setAnswersArr] = useState(null);
  const [operator, setOperator] = useState(OPERATOR);
  const [min, setMin] = useState(MIN);
  const [max, setMax] = useState(MAX);
  const [count, setCount] = useState(COUNT);

  useEffect(() => {
    // get and set settings from LocalStorage
    const settings = getSettings();
    setOperator(settings.operator);
    setMin(settings.min);
    setMax(settings.max);
    setCount(settings.count);
    // eslint-disable-next-line
  }, []);

  const mathTask = useMemo(() => {
    return generateMathTask(min, max, operator, setAnswer);
    // eslint-disable-next-line
  }, [min, max, operator, count]);

  useEffect(() => {
    // get and set AnswersArr
    setAnswersArr(getRandomAnswerArr(min, max, operator, answer));
    // update settings in LocalStorage
    updateSettings(min, max, operator, count);
    // eslint-disable-next-line
  }, [min, max, operator, count]);

  useEffect(() => {
    if (userAnswer !== '') {
      setUserAnswer('');
    }
    updateSettings(min, max, operator, count);
    // eslint-disable-next-line
  }, [min, max, operator]);

  function handleSubmit(e) {
    if (e) e.preventDefault();
    checkAnswer(answer, userAnswer, setCount, setUserAnswer, mathTask);
  }

  return (
    <div className={css.wrapGame} onSubmit={handleSubmit}>
      <Setting
        operator={operator}
        setOperator={setOperator}
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
      />
      <MathTask task={mathTask} value={userAnswer} setValue={setUserAnswer} />
      <Divider />
      <Answers
        answers={answersArr}
        handleClick={setUserAnswer}
        checkAnswer={handleSubmit}
      />
      <Divider />
      <Footer count={count} userAnswer={userAnswer} />
    </div>
  );
};

export default MathGame;
