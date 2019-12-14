import React from 'react';

import css from './Contact.module.css';

const Contact = () => (
  <>
    <div className={css.wrapContact}>
      <p className={css.nameContact}>Ivan Zabolotnyi</p>
      <span className={css.statusContact} role="img" aria-label="dot">
        ⚫
      </span>
    </div>
    <hr />
    <div className={css.wrapContact}>
      <p className={css.nameContact}>Stepan Pidcova</p>
      <span className={css.statusContact} role="img" aria-label="dot">
        ⚫
      </span>
    </div>
    <hr />
    <div className={css.wrapContact}>
      <p className={css.nameContact}>Taras Bugai</p>
      <span className={css.statusContact} role="img" aria-label="dot">
        ⚫
      </span>
    </div>
    <hr />
  </>
);

export default Contact;
