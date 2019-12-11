import React, { Component } from 'react';

import DoDoHelper from './DoDoHelper/DoDoHelper';
import Contact from './Contact/Contact';

import css from './Contacts.module.css';

class Contacts extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    contacts: {},
  };

  render() {
    return (
      <>
        <div className={css.wrapContacts}>
          <div className={css.titleContacts}>Контакти</div>
          <DoDoHelper />
          <hr />
          <Contact />
        </div>
      </>
    );
  }
}

export default Contacts;
