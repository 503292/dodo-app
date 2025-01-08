import React from 'react';

import CurrentYear from '../CurrentYear/CurrentYear';

import { ReactComponent as WhatsApp } from '../../../assets/image/messengers/whatsapp.svg';
import { ReactComponent as Skype } from '../../../assets/image/messengers/skype.svg';
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
            href="mailto:kalysh.max@gmail.com?subject=ask from alatyr!"
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
          title="WhatsApp"
          className={css.messenger}
          href="https://wa.me/+380938800911"
          target="_blank"
          rel="noreferrer noopener"
        >
          <WhatsApp />
        </a>
        <a
          title="Skype"
          className={css.messenger}
          href={`skype:kalysh_max?chat`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Skype />
        </a>
      </div>
    </div>
  );
};

export default MyContacts;
