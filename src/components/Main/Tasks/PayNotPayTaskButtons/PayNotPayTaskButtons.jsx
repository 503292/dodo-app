import React from 'react';
import css from './PayNotPayTaskButtons.module.scss';

import { ReactComponent as Strawberry } from '../../../../assets/image/rest-strawberry.svg';
import { ReactComponent as Dollar } from '../../../../assets/image/currency/dollar.svg';

const PayNotPayTaskButtons = () => {
  return (
    <div className={css.wrapBtn}>
      <button className={`${css.notPayBtn} ${css.btn}`} type="button">
        <Strawberry />
      </button>
      <button className={`${css.payBtn} ${css.btn}`} type="button">
        <Dollar />
      </button>
    </div>
  );
};

export default PayNotPayTaskButtons;
