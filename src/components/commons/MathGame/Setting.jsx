import React, { useState } from 'react';
import { toastMessage } from '../Toast/Toast';
import CircleButton from './CircleButton';
import SettingBtn from './SettingBtn';
import BoxWithBorder from '../BoxWithBorder/BoxWithBorder';
import Divider from '../Divider/Divider';
import Counter from './Counter';

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
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
          <Divider />
        </>
      ) : null}
    </div>
  );
};

export default Setting;
