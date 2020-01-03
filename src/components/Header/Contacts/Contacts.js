import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

import css from './Contacts.module.css';

const Contacts = () => (
  <>
    <div className={css.wrapIcon}>
      <FontAwesomeIcon className={css.contacts} icon={faAddressBook} />
    </div>
  </>
);

export default Contacts;
