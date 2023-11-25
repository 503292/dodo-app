import React from 'react';
import USDT from '../../../assets/image/payments/QR_USDT.png';
import BTC from '../../../assets/image/payments/QR_BTC.png';
import ETH from '../../../assets/image/payments/QR_ETH.png';
import css from './Payments.module.scss';

const currency = { USDT, BTC, ETH };

const Binance = () => {
  return (
    <div className={css.binance} style={{ minHeight: '200px' }}>
      {Object.keys(currency).map((c, idx) => (
        <div className={css.currency} key={idx}>
          <img src={currency[c]} alt={c} />
        </div>
      ))}
    </div>
  );
};

export default Binance;
