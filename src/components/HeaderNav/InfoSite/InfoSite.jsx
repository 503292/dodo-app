import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

// import { ReactComponent as Info } from '../../../assets/image/info.svg';

import css from './InfoSite.module.css';

const InfoSite = () => (
  <div className={css.wrapInfo}>
    {/* <Info className={css.infoIcon} /> */}
    <FontAwesomeIcon className={css.info} icon={faCog} />
  </div>
);

export default InfoSite;
