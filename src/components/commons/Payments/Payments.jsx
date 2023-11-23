import React from 'react';
import { ReactComponent as USDT } from '../../../assets/image/payments/BinancePayQR_USDT.svg';
import { ReactComponent as BTC } from '../../../assets/image/payments/BinancePayQR_BTC.svg';
import { ReactComponent as ETC } from '../../../assets/image/payments/BinancePayQR_ETC.svg';
import css from './Payments.module.scss';

const currency = ['USDT', 'BTC', 'ETC'];

const binancePays = [<USDT />, <BTC />, <ETC />];

const Payments = () => {
  return (
    <div className={css.wrapBinance} style={{ minHeight: '200px' }}>
      {binancePays.map((b, idx) => (
        <div className={css.currency} key={idx}>
          {b}
          <p>{currency[idx]}</p>
        </div>
      ))}
    </div>
  );
};

export default Payments;
