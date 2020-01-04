import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import css from './Contact.module.css';

const Contact = () => (
  <>
    <div className={css.wrapContact}>
      <p className={css.nameContact}>Ivan Zabolotnyi</p>
      <FontAwesomeIcon className={css.statusContact} icon={faCircle} />
    </div>
    <div className={css.wrapContact}>
      <p className={css.nameContact}>Stepan Kopyto</p>
      <FontAwesomeIcon className={css.statusContact} icon={faCircle} />
    </div>
    <div className={css.wrapContact}>
      <p className={css.nameContact}>Mychailo Koval</p>
      <FontAwesomeIcon className={css.statusContact} icon={faCircle} />
    </div>
  </>
);

export default Contact;
