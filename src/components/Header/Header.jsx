import React, { Component } from 'react';

// material-ui

import DollarRate from './DollarRate/DollarRate';
import Weather from './Weather/Weather';
import Logo from './Logo/Logo';
import BtnLogin from './BtnLogin/BtnLogin';

import css from './Header.module.css';

class Header extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={css.wrapHeader}>
          <Logo />
          <Weather />

          <DollarRate />
          <BtnLogin />
        </div>
      </>
    );
  }
}

export default Header;
