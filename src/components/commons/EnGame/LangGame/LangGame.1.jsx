import React, { useState, useEffect } from 'react';
import OneLineSelector from './OneLineSelector';
import Counters from './Counters';
import Settitng from './Settitng';
import { getNewWordsArr, randomizeArray } from './helper';
import { useLocalStorage } from './useLocalStorage';
import css from './LangGame.module.scss';
import { EMPTY_ARR, STEP_INCREMENT, defaultArr } from './LangGame';

// TODO fix for update startIndex when game End
// LangGame
export const LangGame = () => {
  const { getSettings, updateSettings } = useLocalStorage();

  let { counterTRUE, counterFALSE, startIndex } = getSettings();

  const [words, setWords] = useState([]);
  const [wordsRandom, setWordsRandom] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [activeIndexes, setActiveIndexes] = useState(EMPTY_ARR);
  const [isWrongAnswer, setIsWrongAnswer] = useState(EMPTY_ARR);

  useEffect(() => {
    generateData();
    updateLocalStartIndex();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (disabledButtons.length === 0) return;
    if (disabledButtons.length === STEP_INCREMENT) {
      setTimeout(() => {
        generateData();
        updateLocalStartIndex();
        setDisabledButtons([]);
      }, 700);
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

  function validEndGame() {
    if (defaultArr.length <= startIndex) {
      updateSettings(prev => {
        const newSettings = {
          ...prev,
          startIndex: 0,
        };
        startIndex = 0;
        return newSettings;
      });
    }
  }

  function generateData() {
    validEndGame();
    // left btn
    const newWords = getNewWordsArr(defaultArr, startIndex, STEP_INCREMENT);
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
  }

  const loadNewWords = () => {
    generateData();
    updateLocalStartIndex();
  };

  function resetCounterTrue() {
    // counterTRUE = 0;
    // setTimeout(() => {
    //   console.log(counterTRUE, 'counterTRUE');
    //   updateSettings(prev => ({
    //     ...prev,
    //     counterTRUE,
    //   }));
    // }, 100);
    updateSettings(prev => {
      counterTRUE = 0;
      const newSettings = {
        ...prev,
        counterTRUE: counterTRUE,
      };
      return newSettings;
    });
  }

  function resetCounterFALSE() {
    // counterFALSE = 0;
    // updateSettings(prev => ({
    //   ...prev,
    //   counterFALSE,
    // }));
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
