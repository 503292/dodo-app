import React, { Component } from 'react';
import Logo from './Logo/Logo';
import Weather from './Weather/Weather';
import DollarRate from './DollarRate/DollarRate';
import BtnIn from './BtnIn/BtnIn';
import BtnOut from './BtnOut/BtnOut';

import css from './Header.module.css';

class Header extends Component {
  state = {};

  render() {
    return (
      <>
        <Logo className={css.logo} />
        <Weather className={css.weather} />
        <DollarRate className={css.dollarRate} />
        <BtnIn className={css.btnIn} />
        <BtnOut className={css.btnOut} />
      </>
    );
  }
}

export default Header;
