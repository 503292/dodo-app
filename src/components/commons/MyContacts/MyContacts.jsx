import React, { useEffect, useState } from 'react';

import CurrentYear from '../CurrentYear/CurrentYear';

import { ReactComponent as WhatSappUrl } from '../../../assets/image/messengers/whatsapp.svg';
import css from './MyContacts.module.scss';

const MyContacts = () => {
  return (
    <div className={css.myContacts}>
      <div className={css.wrapCreater}>
        <p>
          {/* <a className={css.link} href="https://www.linkedin.com/in/kalyshmax/">
            МaVKa
          </a> */}
          <a
            className={css.link}
            href="mailto:kalysh.max@gmail.com?subject=Питання з YaK!"
          >
            kalysh.max@gmail.com
          </a>
          <span>
            © 2020 - <CurrentYear />
          </span>
        </p>
      </div>
      <div className={css.messangers}>
        <a
          className={css.messenger}
          href="https://wa.me/+380938800911"
          target="_blank"
          rel="noreferrer noopener"
        >
          <WhatSappUrl />
          <span className={`${css.bgBlock} ${css.green}`} />
        </a>
      </div>
    </div>
  );
};

export default MyContacts;
