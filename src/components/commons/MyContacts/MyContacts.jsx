import React from 'react';

import css from './MyContacts.module.scss';

import { ReactComponent as WhatSappUrl } from '../../../assets/image/messengers/whatsapp.svg';

const MyContacts = () => {
  return (
    <>
      <div className={css.wrapCreater}>
        <p>
          <span>© 2020</span>
          <a className={css.link} href="https://www.linkedin.com/in/kalyshmax/">
            МaVKa
          </a>
        </p>
        <p>
          <a
            className={css.link}
            href="mailto:kalysh.max@gmail.com?subject=Питання з YaK!"
          >
            kalysh.max@gmail.com
          </a>
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
    </>
  );
};

export default MyContacts;
