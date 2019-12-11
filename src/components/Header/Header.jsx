import React, { Component } from 'react';
import Logo from './Logo/Logo';
import Weather from './Weather/Weather';
import DollarRate from './DollarRate/DollarRate';
import BtnLogin from './BtnLogin/BtnLogin';
// import BtnOut from './BtnOut/BtnOut';

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
