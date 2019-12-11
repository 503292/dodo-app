import React from 'react';

import dollar from '../../../assets/image/dollar_33x17.png';

import css from './DollarRate.module.css';

const DollarRate = () => (
  <>
    <div className={css.wrapDollarRate}>
      <span>1</span>
      <img src={dollar} alt="dollar" />
      <p>24.5грн</p>
    </div>
  </>
);

export default DollarRate;
