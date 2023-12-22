import React from 'react';

import MyContacts from '../../commons/MyContacts/MyContacts';
import Binance from '../../commons/Payments/Binance';
import PayPal from '../../commons/Payments/PayPal';

import css from './Info.module.scss';

const Info = () => (
  <div className={css.container}>
    <Binance />
    <PayPal />
    <MyContacts />
  </div>
);

export default Info;
