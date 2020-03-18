import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import css from './BtnLogin.module.css';

const BtnIn = () => (
  <div className={css.wrapBtn}>
    <FontAwesomeIcon className={css.goOut} icon={faPowerOff} />
    {/* <button className={css.login} type="button">
      Login
    </button> */}
  </div>
);

export default BtnIn;
