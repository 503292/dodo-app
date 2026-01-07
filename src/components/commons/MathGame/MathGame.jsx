import React, { useState, useMemo, useEffect } from 'react';
import Divider from '../Divider/Divider';
import MathTask from './MathTask';
import Setting from './Setting';
import Answers from './Answers';

import { generateMathTask, checkAnswer, getRandomAnswerArr } from './helper';
import { useLocalStorage } from './useLocalStorage';

import css from './MathGame.module.scss';

const MathGame = () => {
  const { getSettings, updateSettings } = useLocalStorage();
  const [answer, setAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [answersArr, setAnswersArr] = useState(null);

  const [operator, setOperator] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [count, setCount] = useState();

  const [isOpen, setIsOpen] = useState(false);
  // TODO in progrres
  const [isRandom, setIsRandom] = useState(false);
  // const [isSound, setIsSound] = useState(false);

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
    if (
      typeof min === 'undefined' &&
      typeof max === 'undefined' &&
      typeof operator === 'undefined'
    )
      return;
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

  const checkUserAnswer = a => {
    setUserAnswer(a);
    setTimeout(() => {
      checkAnswer(answer, a, setCount, setUserAnswer, mathTask);
    }, 700);
  };

  return (
    <form className={css.wrapGame}>
      <Setting
        operator={operator}
        setOperator={setOperator}
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
        count={count}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {isOpen ? null : (
        <>
          <MathTask task={mathTask} value={userAnswer} />
          <Divider />
          <Answers answers={answersArr} handleClick={checkUserAnswer} />
        </>
      )}
    </form>
  );
};

export default MathGame;
