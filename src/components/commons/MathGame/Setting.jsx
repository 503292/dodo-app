import React from 'react';

// TODO in progress
const MAX_ARR = [10, 100, 1000];
const OPERATORS = ['+', '-', '*', '/'];

// √²  x² => '%', 'x²', '√² '
// TODO view different view for task " -- " & " | "

const Setting = () => {
  return (
    <div>
      <p>Налаштування гри:</p>
      <div>
        <span>Рівень - </span>
        {MAX_ARR.map((el, idx) => (
          <MyButton key={idx} text={el} />
        ))}
      </div>
      <div>
        <span>Оператор - </span>
        {OPERATORS.map((el, idx) => (
          <MyButton key={idx} text={el} />
        ))}
      </div>
    </div>
  );
};

export default Setting;

const MyButton = ({ text = '', onClick = () => {} }) => {
  return (
    <button type="button" onClick={() => onClick()}>
      {text}
    </button>
  );
};
