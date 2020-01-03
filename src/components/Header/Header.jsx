import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// material-ui

import Logo from './Logo/Logo';
import Contacts from './Contacts/Contacts';
import Weather from './Weather/Weather';
import DollarRate from './DollarRate/DollarRate';
import BtnLogin from './BtnLogin/BtnLogin';

import css from './Header.module.css';

const ativeStyle = {
  color: 'tomato',
};

class Header extends Component {
  state = {};

  render() {
    return (
      <ul className={css.wrapHeader}>
        <li className={css.routeHeader}>
          <NavLink className={css.logoLink} to="/" exact>
            <Logo />
          </NavLink>
        </li>

        <li className={css.routeHeader}>
          <NavLink
            className={css.contactsLink}
            to="/contacts"
            exact
            activeStyle={ativeStyle}
          >
            <Contacts />
          </NavLink>
        </li>

        <li className={css.routeHeader}>
          <NavLink
            className={css.weaterLink}
            to="/weather"
            exact
            activeStyle={ativeStyle}
          >
            <Weather />
          </NavLink>
        </li>

        <li className={css.routeHeader}>
          <NavLink
            className={css.rateLink}
            to="/rate"
            exact
            activeStyle={ativeStyle}
          >
            <DollarRate />
          </NavLink>
        </li>

        <li className={css.routeHeader}>
          <NavLink
            className={css.loginLink}
            to="/login"
            exact
            activeStyle={ativeStyle}
          >
            <BtnLogin />
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Header;
