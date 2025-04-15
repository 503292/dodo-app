import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import css from './Calculator.module.scss';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const inputDigit = digit => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperator = nextOperator => {
    if (operator && firstOperand && displayValue !== '0') {
      performOperation();
    }
    setFirstOperand(parseFloat(displayValue));
    setOperator(nextOperator);
    setDisplayValue('0');
  };

  const performOperation = () => {
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    if (operator === '+') {
      result = firstOperand + secondOperand;
    } else if (operator === '-') {
      result = firstOperand - secondOperand;
    } else if (operator === '*') {
      result = firstOperand * secondOperand;
    } else if (operator === '/') {
      result = firstOperand / secondOperand;
    }
    setDisplayValue(String(result));
    setOperator(null);
    setFirstOperand(result);
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstOperand(null);
  };

  return (
    <div className={css.calculator}>
      <Display value={displayValue} />
      <div className={css.buttons}>
        <div className={css.row}>
          <Button value="7" onClick={inputDigit} />
          <Button value="8" onClick={inputDigit} />
          <Button value="9" onClick={inputDigit} />
          <Button value="/" onClick={handleOperator} className={css.operator} />
        </div>
        <div className={css.row}>
          <Button value="4" onClick={inputDigit} />
          <Button value="5" onClick={inputDigit} />
          <Button value="6" onClick={inputDigit} />
          <Button value="*" onClick={handleOperator} className={css.operator} />
        </div>
        <div className={css.row}>
          <Button value="1" onClick={inputDigit} />
          <Button value="2" onClick={inputDigit} />
          <Button value="3" onClick={inputDigit} />
          <Button value="+" onClick={handleOperator} className={css.operator} />
        </div>
        <div className={css.row}>
          <Button value="." onClick={inputDecimal} />
          <Button value="0" onClick={inputDigit} />
          <Button value="=" onClick={performOperation} className={css.equals} />
          <Button value="-" onClick={handleOperator} className={css.operator} />
        </div>
        <div className={css.row}>
          <Button value="Clear" onClick={clearDisplay} className={css.clear} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
