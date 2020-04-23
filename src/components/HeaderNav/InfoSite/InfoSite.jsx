import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faCog } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Setting } from '../../../assets/image/setting.svg';

import css from './InfoSite.module.css';

const InfoSite = () => (
  <div className={css.wrapInfo}>
    <Setting className={css.info} />
  </div>
);

export default InfoSite;
