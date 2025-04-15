import React from 'react';
import { ReactComponent as СrissСross } from '../../../assets/image/criss_cross.svg';
import css from './BtnCrissCross.module.scss';

const BtnCrissCross = ({ onClick, className }) => {
  return (
    <button
      type="button"
      className={`${css.backBtn} ${className}`}
      onClick={() => onClick()}
    >
      <СrissСross className={css.close} />
    </button>
  );
};

export default BtnCrissCross;
