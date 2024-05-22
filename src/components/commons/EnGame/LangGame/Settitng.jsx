/* eslint-disable */
import React, { useState } from 'react';
import { CounterTRUE, CounterFALSE } from './Counters';
import MyButton from '../MyButton/MyButton';
import SettingBtn from '../../MathGame/SettingBtn';
import Divider from '../../Divider/Divider';
import { ReactComponent as Refresh } from '../images/refresh.svg';
import css from './LangGame.module.scss';

const Settitng = ({
  counterTRUE,
  counterFALSE,
  resetCounterTrue,
  resetCounterFALSE,
  loadNewWords,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={css.wrapSetting}>
      <SettingBtn isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
      {isOpen ? (
        <>
          <div className={css.setting}>
            <div className={css.wrapCounters}>
              <MyButton
                disabled={counterTRUE === 0}
                onClick={() => resetCounterTrue()}
              >
                <span>Обнулити</span>
                <CounterTRUE counterTRUE={counterTRUE} />
              </MyButton>

              <MyButton
                disabled={counterFALSE === 0}
                onClick={() => resetCounterFALSE()}
              >
                <span>Обнулити</span>
                <CounterFALSE counterFALSE={counterFALSE} />
              </MyButton>
            </div>
            <MyButton onClick={() => loadNewWords()}>
              <span>
                Завантажити нові слова
                <Refresh />
              </span>
            </MyButton>
          </div>
          <Divider />
        </>
      ) : null}
    </div>
  );
};

export default Settitng;
