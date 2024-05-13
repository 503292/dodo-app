import React, { useState, useMemo, useEffect } from 'react';
import Divider from '../Divider/Divider';
import MathTask from './MathTask';
import SettingBtn from './SettingBtn';
import Setting from './Setting';
import Answers from './Answers';
import Footer from './Footer';
import { generateMathTask, checkAnswer, getRandomAnswerArr } from './helper';

import css from './MathGame.module.scss';

const MIN = 0;
const MAX = 10;
const OPERATOR = '+';

const MathGame = () => {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [answersArr, setAnswersArr] = useState(null);
  const [selectOperator, setSelectOperator] = useState(OPERATOR);
  const [min, setMin] = useState(MIN);
  const [max, setMax] = useState(MAX);
  // const [isOpen, setIsOpen] = useState(true);

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
      {/* <SettingBtn isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} /> */}
      {/* {isOpen ? ( */}
      <>
        <Setting
          selectOperator={selectOperator}
          setSelectOperator={setSelectOperator}
          min={min}
          setMin={setMin}
          max={max}
          setMax={setMax}
        />
      </>
      {/* ) : null} */}

      <MathTask task={mathTask} value={userAnswer} setValue={setUserAnswer} />
      <Divider />
      <Answers answers={answersArr} handleClick={setUserAnswer} />
      <Divider />
      <Footer count={count} userAnswer={userAnswer} />
    </form>
  );
};

export default MathGame;
