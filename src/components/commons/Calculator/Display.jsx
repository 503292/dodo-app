import React from 'react';
import css from './Calculator.module.scss';

function Display({ value }) {
  return <div className={css.display}>{value}</div>;
}

export default Display;
