import React from 'react';
import { toastMessage } from '../Toast/Toast';
import CircleButton from './CircleButton';
import SettingBtn from './SettingBtn';
import BoxWithBorder from '../BoxWithBorder/BoxWithBorder';
import Counter from './Counter';

import { ReactComponent as VolON } from '../../../assets/image/volume_on.svg';
import { ReactComponent as VolOFF } from '../../../assets/image/volume_off.svg';
import { ReactComponent as Random } from '../../../assets/image/random.svg';

import { MIN, MAX, OPERATORS } from './constant';

import css from './MathGame.module.scss';

const Setting = ({
  settings,
  setSettings,
  isOpen,
  setIsOpen,
  mathTask,
  answerStatus,
}) => {
  const { min, max, operator, count, isSound, isRandomOperator } = settings;

  const setValidatedValue = (value, limit, key) => {
    if (value === limit) {
      toastMessage('MIN ≠ MAX');
      return;
    }
    setSettings(s => ({ ...s, [key]: value }));
  };

  return (
    <div className={css.wrapSetting}>
      <div className={css.settingHead}>
        <Counter count={count} answerStatus={answerStatus} />
        <SettingBtn isOpen={isOpen} setIsOpen={() => setIsOpen(v => !v)} />
      </div>

      {isOpen && (
        <div className={css.setting}>
          <BoxWithBorder title="MIN">
            {MIN.map(el => (
              <CircleButton
                key={el}
                text={el}
                active={el === min}
                onClick={() => setValidatedValue(el, max, 'min')}
              />
            ))}
          </BoxWithBorder>

          <BoxWithBorder title="MAX">
            {MAX.map(el => (
              <CircleButton
                key={el}
                text={el}
                active={el === max}
                onClick={() => setValidatedValue(el, min, 'max')}
              />
            ))}
          </BoxWithBorder>

          <BoxWithBorder title="Оператор">
            {OPERATORS.map(el => (
              <CircleButton
                key={el}
                text={el}
                active={el === operator}
                onClick={() => setSettings(s => ({ ...s, operator: el }))}
              />
            ))}
          </BoxWithBorder>

          <BoxWithBorder title="Опції">
            <div className={css.help}>
              {mathTask.question} = {mathTask.answer}
            </div>
            <CircleButton
              active={isRandomOperator}
              onClick={() =>
                setSettings(s => ({
                  ...s,
                  isRandomOperator: !s.isRandomOperator,
                }))
              }
            >
              <Random />
            </CircleButton>

            <CircleButton
              active={isSound}
              onClick={() => setSettings(s => ({ ...s, isSound: !s.isSound }))}
            >
              {isSound ? <VolON /> : <VolOFF />}
            </CircleButton>
          </BoxWithBorder>
        </div>
      )}
    </div>
  );
};

export default Setting;
