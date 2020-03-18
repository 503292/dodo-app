import React from 'react';

import css from './DollarRate.module.css';

const DollarRate = () => (
  <div className={css.wrapRate}>
    <p className={css.dollar}>${/* € */}</p>
    <p className={css.gryvnya}>
      =24.5<span> грн</span>
    </p>
  </div>
);

export default DollarRate;
