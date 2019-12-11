import React from 'react';

import css from './Contact.module.css';

const Contact = () => (
  <>
    <div className={css.wrapContact}>
      <p className={css.nameContact}>Ivan Zabolotnyi</p>
      <p className={css.statusContact}>in</p>
    </div>
    <hr />
    <div className={css.wrapContact}>
      <p className={css.nameContact}>Stepan Pidcova</p>
      <p className={css.statusContact}>in</p>
    </div>
    <hr />
    <div className={css.wrapContact}>
      <p className={css.nameContact}>Taras Bugai</p>
      <p className={css.statusContact}>in</p>
    </div>
    <hr />
  </>
);

export default Contact;
