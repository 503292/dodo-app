import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import css from './Contacts.module.css';

const Contacts = () => (
  <>
    <div className={css.wrapIcon}>
      {/* <FontAwesomeIcon className={css.contacts} icon={faAddressBook} /> */}
      <FontAwesomeIcon className={css.contacts} icon={faUsers} />
    </div>
  </>
);

export default Contacts;
