import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo/Logo';
import WeatherNav from './WeatherNav/WeatherNav.Container';
import CurrencyNav from './CurrencyNav/CurrencyNav.Container';
import InfoSite from './InfoSite/InfoSite';

import css from './Header.module.css';

const ativeStyle = {
  color: 'tomato',
  fill: 'tomato',
};

class Header extends Component {
  state = {};

  render() {
    return (
      <div className={css.wrapHeader}>
        <ul className={css.wrapList}>
          <li className={css.routeHeader}>
            <NavLink activeStyle={ativeStyle} to="/" exact>
              <Logo />
            </NavLink>
          </li>
          <li className={css.routeHeader}>
            <NavLink to="/weather" exact activeStyle={ativeStyle}>
              <WeatherNav />
            </NavLink>
          </li>
          <li className={css.routeHeader}>
            <NavLink to="/currency" exact activeStyle={ativeStyle}>
              <CurrencyNav />
            </NavLink>
          </li>

          <li className={css.routeHeader}>
            <NavLink to="/info" exact activeStyle={ativeStyle}>
              <InfoSite />
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
