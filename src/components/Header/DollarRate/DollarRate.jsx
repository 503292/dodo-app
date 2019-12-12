import React from 'react';

import css from './DollarRate.module.css';

const DollarRate = () => (
  <>
    <div className={css.wrapRate}>
      <p className={css.dollar}>1 ${/* € */}</p>
      <p className={css.gryvnya}>24.5 грн</p>
    </div>
  </>
);

export default DollarRate;
