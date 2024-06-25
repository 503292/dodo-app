import React, { useState, useEffect } from 'react';
import OneLineSelector from './OneLineSelector';
import Counters from './Counters';

import Settitng from './Settitng';
import { getNewWordsArr, randomizeArray } from './helper';
import { useLocalStorage } from './useLocalStorage';
import { words_lib } from '../constants/words_lib';
import css from './LangGame.module.scss';

const EMPTY_ARR = [null, null];
const STEP_INCREMENT = 5;

// LangGame
const LangGame = () => {
  const { getSettings, updateSettings } = useLocalStorage();

  let { counterTRUE, counterFALSE, startIndex } = getSettings();

  const [words, setWords] = useState([]);
  const [wordsRandom, setWordsRandom] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [activeIndexes, setActiveIndexes] = useState(EMPTY_ARR);
  const [isWrongAnswer, setIsWrongAnswer] = useState(EMPTY_ARR);
  const [, forceUpdate] = useState();

  useEffect(() => {
    generateData();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (startIndex === 0) return;
    if (isEndGame()) {
      startIndex = 0;
    }
    generateData();
    // eslint-disable-next-line
  }, [startIndex]);

  useEffect(() => {
    if (disabledButtons.length === 0) return;
    if (disabledButtons.length === words.length) {
      loadNewWords();
    }
    // eslint-disable-next-line
  }, [disabledButtons.length]);

  useEffect(() => {
    const [left, right] = activeIndexes;
    if (left === right && left !== null && right !== null) {
      setDisabledButtons(prev => [...prev, right]);
      updateSettings(prev => ({ ...prev, counterTRUE: prev.counterTRUE + 1 }));
      setActiveIndexes(EMPTY_ARR);
    }
    // eslint-disable-next-line
  }, [activeIndexes]);

  useEffect(() => {
    const [left, right] = isWrongAnswer;
    if (left !== null || right !== null) {
      setTimeout(() => {
        updateSettings(prev => ({
          ...prev,
          counterFALSE: prev.counterFALSE + 1,
        }));
        setIsWrongAnswer(EMPTY_ARR);
      }, 700);
    }
    // eslint-disable-next-line
  }, [isWrongAnswer]);

  function isEndGame() {
    if (words_lib.length <= startIndex) {
      updateSettings(prev => ({
        ...prev,
        startIndex: 0,
      }));
      return true;
    }
    return false;
  }

  function generateData() {
    // left btn
    const newWords = getNewWordsArr(words_lib, startIndex, STEP_INCREMENT);
    setWords(newWords);
    // right btn
    const randomData = randomizeArray(newWords);
    setWordsRandom(randomData);
  }

  const handleCheckLeft = leftVal => {
    const [left, right] = activeIndexes;
    if (left === leftVal) {
      setActiveIndexes([null, right]);
    } else if (right === null) {
      setActiveIndexes([leftVal, null]);
    } else if (right === leftVal) {
      setActiveIndexes([leftVal, right]);
    } else {
      setIsWrongAnswer([leftVal, isWrongAnswer[1]]);
    }
  };

  const handleCheckRight = rightVal => {
    const [left, right] = activeIndexes;
    if (right === rightVal) {
      setActiveIndexes([left, null]);
    } else if (left === null) {
      setActiveIndexes([null, rightVal]);
    } else if (left === rightVal) {
      setActiveIndexes([left, rightVal]);
    } else {
      setIsWrongAnswer([isWrongAnswer[0], rightVal]);
    }
  };

  function updateLocalStartIndex() {
    updateSettings(prev => ({
      ...prev,
      startIndex: startIndex + STEP_INCREMENT,
    }));
    // startIndex = startIndex + STEP_INCREMENT;
  }

  const loadNewWords = () => {
    updateLocalStartIndex();
    setDisabledButtons([]);
  };

  function resetCounterTrue() {
    counterTRUE = 0;
    updateSettings(prev => ({
      ...prev,
      counterTRUE,
    }));

    // gimp stick
    forceUpdate(new Date());
  }

  function resetCounterFALSE() {
    counterFALSE = 0;
    updateSettings(prev => ({
      ...prev,
      counterFALSE,
    }));
    // gimp stick
    forceUpdate(new Date());
  }

  return (
    <>
      <Settitng
        counterTRUE={counterTRUE}
        counterFALSE={counterFALSE}
        startIndex={startIndex}
        resetCounterTrue={resetCounterTrue}
        resetCounterFALSE={resetCounterFALSE}
        loadNewWords={loadNewWords}
      />

      <Counters counterTRUE={counterTRUE} counterFALSE={counterFALSE} />
      <ul className={css.langGame}>
        {words.length > 0 &&
          words.map((data, idx) => (
            <OneLineSelector
              key={idx}
              data={data}
              randomData={wordsRandom[idx]}
              handleCheckLeft={handleCheckLeft}
              handleCheckRight={handleCheckRight}
              disabledButtons={disabledButtons}
              activeIndexes={activeIndexes}
              isWrongAnswer={isWrongAnswer}
            />
          ))}
      </ul>
    </>
  );
};

export default LangGame;
