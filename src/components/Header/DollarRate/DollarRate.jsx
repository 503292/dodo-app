import React from 'react';

import dollar from '../../../assets/image/dollar_33x17.png';

import css from './DollarRate.module.css';

const DollarRate = () => (
  <>
    <div className={css.wrapDollarRate}>
      <h2>1</h2>
      <img src={dollar} alt="dollar" />
      <p>24.5грн</p>
    </div>
  </>
);

export default DollarRate;
