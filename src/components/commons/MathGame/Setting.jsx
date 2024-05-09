import React from 'react';
import { toastMessage } from '../Toast/Toast';

import { MIN, MAX, OPERATORS } from './constant';

import css from './MathGame.module.scss';

// TODO view different view for task " -- " & " | "
const Setting = ({
  selectOperator,
  setSelectOperator,
  min,
  setMin,
  max,
  setMax,
}) => {
  const validate = (val, setVal, limit) => {
    if (limit === val) return toastMessage(`MIN ≠ MAX`);
    setVal(val);
  };

  return (
    <div className={css.setting}>
      <p>Налаштування:</p>
      <div>
        <span>MIN</span>
        {MIN.map((el, idx) => (
          <MyButton
            onClick={() => validate(el, setMin, max)}
            active={el === min}
            key={idx}
            text={el}
          />
        ))}
      </div>

      <div>
        <span>MAX</span>
        {MAX.map((el, idx) => (
          <MyButton
            onClick={() => validate(el, setMax, min)}
            active={el === max}
            key={idx}
            text={el}
          />
        ))}
      </div>

      <div>
        <span>Оператор</span>
        {OPERATORS.map((el, idx) => (
          <MyButton
            onClick={() => setSelectOperator(el)}
            active={el === selectOperator}
            key={idx}
            text={el}
          />
        ))}
      </div>
    </div>
  );
};

export default Setting;

const MyButton = ({ text = '', onClick = () => {}, active }) => {
  return (
    <>
      <button
        style={active ? { background: '#ffeb3b' } : {}}
        type="button"
        onClick={() => onClick()}
      >
        {text}
      </button>
    </>
  );
};
