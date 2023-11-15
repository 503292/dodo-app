import React from 'react';

import MyContacts from '../../commons/MyContacts/MyContacts';
import QuickAccessGuide from '../../commons/QuickAccessGuide/QuickAccessGuide';

import css from './Info.module.scss';

const Info = () => (
  <div className={css.container}>
    <QuickAccessGuide />
    <MyContacts />
  </div>
);

export default Info;
