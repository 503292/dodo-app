import React from 'react';

import { ReactComponent as Setting } from '../../../assets/image/setting.svg';

import css from './InfoSite.module.css';

const InfoSite = () => (
  <div className={css.wrapInfo}>
    <Setting className={css.info} />
  </div>
);

export default InfoSite;
