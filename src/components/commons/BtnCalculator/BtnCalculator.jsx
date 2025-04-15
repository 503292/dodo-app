import React from 'react';

import { ReactComponent as CalculatorIcon } from '../../../assets/image/calculator.svg';
import css from './BtnCalculator.module.scss';

const BtnCalculator = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      type="button"
      className={css.btnCalculator}
    >
      <CalculatorIcon />
    </button>
  );
};
export default BtnCalculator;
