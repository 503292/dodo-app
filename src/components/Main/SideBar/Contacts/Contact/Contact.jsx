import React from 'react';

import css from './Contact.module.css';

const Contact = () => (
  <>
    <button className={css.wrapContact} type="button">
      <p className={css.nameContact}>Ivan</p>
      <p className={css.statusContact}>status</p>
    </button>
  </>
);

export default Contact;
