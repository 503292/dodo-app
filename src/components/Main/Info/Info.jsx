import React from 'react';

import MyContacts from '../../commons/MyContacts/MyContacts';

import Payments from '../../commons/Payments/Payments';

import css from './Info.module.scss';

const Info = () => (
  <div className={css.container}>
    <Payments />
    <MyContacts />
  </div>
);

export default Info;
