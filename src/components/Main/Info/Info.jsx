import React from 'react';

import MyContacts from '../../commons/MyContacts/MyContacts';

import css from './Info.module.scss';

const Info = () => (
  <div className={css.container}>
    <MyContacts />
  </div>
);

export default Info;
