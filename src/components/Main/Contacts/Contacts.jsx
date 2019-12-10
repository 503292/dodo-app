import React, { Component } from 'react';

import DoDoHelper from './DoDoHelper/DoDoHelper';
import Contact from './Contact/Contact';

class Contacts extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    contacts: {},
  };

  render() {
    return (
      <>
        <DoDoHelper />
        <Contact />
      </>
    );
  }
}

export default Contacts;
