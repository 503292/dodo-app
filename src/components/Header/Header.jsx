import React, { Component } from 'react';
import Logo from './Logo/Logo';
import Weather from './Weather/Weather';
import DollarRate from './DollarRate/DollarRate';
import BtnIn from './BtnIn/BtnIn';
import BtnOut from './BtnOut/BtnOut';

class Header extends Component {
  state = {};

  render() {
    return (
      <>
        <Logo />
        <Weather />
        <DollarRate />

        <BtnIn />
        <BtnOut />
      </>
    );
  }
}

export default Header;
