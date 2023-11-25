import React from 'react';

import MyContacts from '../../commons/MyContacts/MyContacts';
import Binance from '../../commons/Payments/Binance';

import css from './Info.module.scss';

const Info = () => (
  <div className={css.container}>
    <Binance />
    <MyContacts />
  </div>
);

export default Info;
