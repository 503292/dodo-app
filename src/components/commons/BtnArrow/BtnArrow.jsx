import React from 'react';

import { ReactComponent as Left } from '../../../assets/image/arrow-l.svg';
import { ReactComponent as Right } from '../../../assets/image/arrow-r.svg';
import css from './BtnArrow.module.scss';

const BtnArrow = ({ name = 'Left', handleClick }) => {
  return (
    <button className={css.btn} onClick={handleClick}>
      {name === 'Left' ? <Left /> : <Right />}
    </button>
  );
};

export default BtnArrow;
