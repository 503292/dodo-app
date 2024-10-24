import React from 'react';

import BtnCopy from '../BtnCopy/BtnCopy';
import payPalURL from '../../../assets//image/payments/PayPal.svg.webp';

import css from './Payments.module.scss';

const MY_MAIL = 'kalysh@max.gmail.com';

const PayPal = () => {
  return (
    <div className={css.payPal}>
      <img src={payPalURL} alt="PayPal" />
      <span>
        <span>{MY_MAIL}</span> <BtnCopy text={MY_MAIL} />
      </span>
    </div>
  );
};

export default PayPal;
