/* eslint-disable */
import React from 'react';
import css from './LangGame.module.scss';

const Counters = ({ counterTRUE = 0, counterFALSE = 0 }) => {
  return (
    <div className={css.counters}>
      <CounterTRUE counterTRUE={counterTRUE} />
      <CounterFALSE counterFALSE={counterFALSE} />
    </div>
  );
};

export default Counters;

export const CounterTRUE = ({ counterTRUE = 0 }) => {
  return (
    <p className={css.yes}>
      <span>✓</span> : {counterTRUE}
    </p>
  );
};

export const CounterFALSE = ({ counterFALSE = 0 }) => {
  return (
    <p className={css.no}>
      <span>✗</span> : {counterFALSE}
    </p>
  );
};
