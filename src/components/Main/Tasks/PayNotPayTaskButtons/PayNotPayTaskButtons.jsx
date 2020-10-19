import React from 'react';
import css from './PayNotPayTaskButtons.module.scss';

import { ReactComponent as Strawberry } from '../../../../assets/image/rest-strawberry.svg';
import { ReactComponent as Hryvnia } from '../../../../assets/image/currency/hryvnia.svg';

const PayNotPayTaskButtons = () => {
  return (
    <div className={css.wrapBtn}>
      <button className={`${css.notPayBtn} ${css.btn}`} type="button">
        <Strawberry />
      </button>
      <button className={`${css.payBtn} ${css.btn}`} type="button">
        <Hryvnia />
      </button>
    </div>
  );
};

export default PayNotPayTaskButtons;
