import React from 'react';

import BtnCopy from '../BtnCopy/BtnCopy';
import USDT from '../../../assets/image/payments/QR_USDT.png';
import BTC from '../../../assets/image/payments/QR_BTC.png';
import ETH from '../../../assets/image/payments/QR_ETH.png';
import css from './Payments.module.scss';

const currency = { USDT, BTC, ETH };

const PAY_ID = '764342691';

const Binance = () => {
  return (
    <div className={css.binance}>
      <h2>Donate, підтримка проекту, podaruj</h2>
      <div>
        {Object.keys(currency).map((c, idx) => (
          <div className={css.currency} key={idx}>
            <img src={currency[c]} alt={c} />
            <BtnCopy text={PAY_ID} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Binance;
