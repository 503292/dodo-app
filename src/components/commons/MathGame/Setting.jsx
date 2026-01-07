import React, { useState } from 'react';
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

// TODO view different view for task " -- " & " | "
const Setting = ({
  operator,
  setOperator,
  min,
  setMin,
  max,
  setMax,
  count,
  isOpen,
  setIsOpen,
}) => {
  const [isRandom, setIsRandom] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const validate = (val, setVal, limit) => {
    if (limit === val) return toastMessage(`MIN ≠ MAX`);
    setVal(val);
  };

  return (
    <div className={css.wrapSetting}>
      <div className={css.settingHead}>
        <Counter count={count} />
        <SettingBtn isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen ? (
        <>
          <div className={css.setting}>
            <BoxWithBorder title="!">
              <CircleButton
                onClick={() => setIsRandom(prev => !prev)}
                active={isRandom}
              >
                <Random />
              </CircleButton>
              <CircleButton
                onClick={() => setIsSound(prev => !prev)}
                active={isSound}
              >
                {isSound ? <VolON /> : <VolOFF />}
              </CircleButton>
            </BoxWithBorder>
            <BoxWithBorder title="MIN">
              {MIN.map((el, idx) => (
                <CircleButton
                  onClick={() => validate(el, setMin, max)}
                  active={el === min}
                  key={idx}
                  text={el}
                />
              ))}
            </BoxWithBorder>

            <BoxWithBorder title="MAX">
              {MAX.map((el, idx) => (
                <CircleButton
                  onClick={() => validate(el, setMax, min)}
                  active={el === max}
                  key={idx}
                  text={el}
                />
              ))}
            </BoxWithBorder>

            <BoxWithBorder title="Оператор">
              {OPERATORS.map((el, idx) => (
                <CircleButton
                  onClick={() => setOperator(el)}
                  active={el === operator}
                  key={idx}
                  text={el}
                />
              ))}
            </BoxWithBorder>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Setting;
