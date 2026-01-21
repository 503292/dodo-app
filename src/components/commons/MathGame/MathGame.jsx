import React, { useState, useMemo, useEffect } from 'react';
import Divider from '../Divider/Divider';
import MathTask from './MathTask';
import Setting from './Setting';
import Answers from './Answers';

import {
  generateMathTask,
  checkAnswer,
  getRandomAnswerArr,
  randomIntFromInterval,
} from './helper';

import { useLocalStorage } from './useLocalStorage';
import { debounce } from './debounce';
import { OPERATORS } from './constant';

import css from './MathGame.module.scss';

const MathGame = () => {
  const { getSettings, setSettings: saveSettings } = useLocalStorage();

  const [settings, setSettings] = useState(getSettings);
  const [userAnswer, setUserAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);
  const [isChecking, setIsChecking] = useState(false); // 🔑 block answers btns

  /* -------------------- persist settings -------------------- */
  useEffect(() => {
    saveSettings(settings);
  }, [settings, saveSettings]);

  /* -------------------- task generation -------------------- */
  const task = useMemo(
    () => generateMathTask(settings.min, settings.max, settings.operator),
    // eslint-disable-next-line
    [settings.min, settings.max, settings.operator, taskId],
  );

  const answers = useMemo(
    () =>
      getRandomAnswerArr(
        settings.min,
        settings.max,
        settings.operator,
        task.answer,
      ),
    [settings.min, settings.max, settings.operator, task.answer],
  );

  /* -------------------- next task logic -------------------- */
  const generateNextTask = () => {
    setSettings(s => {
      if (!s.isRandomOperator) return s;

      return {
        ...s,
        operator: OPERATORS[randomIntFromInterval(0, 4)], // 🔥 set new random operator
      };
    });

    setTaskId(id => id + 1);
  };

  const checkUserAnswer = debounce(value => {
    if (isChecking) return; // block next click
    setIsChecking(true);

    setUserAnswer(value);

    const isCorrect = checkAnswer(task.answer, value, settings.isSound);
    setAnswerStatus(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => {
      if (isCorrect) {
        setSettings(s => ({ ...s, count: s.count + 1 }));
        generateNextTask();
      }

      setUserAnswer('');
      setAnswerStatus(null);
      setIsChecking(false); // unblock
    }, 300);
  }, 400);

  /* -------------------- render -------------------- */
  return (
    <form className={css.wrapGame}>
      <Setting
        settings={settings}
        setSettings={setSettings}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mathTask={task}
        answerStatus={answerStatus}
      />

      {!isOpen && (
        <>
          <MathTask
            mathTask={task}
            userAnswer={userAnswer}
            answerStatus={answerStatus}
          />
          <Divider />
          <Answers answers={answers} handleClick={checkUserAnswer} />
        </>
      )}
    </form>
  );
};

export default MathGame;
