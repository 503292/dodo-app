import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo/Logo';
// import Contacts from './Contacts/Contacts';
// import WeatherNav from './WeatherNav/WeatherNav.Container';
import CurrencyNav from './CurrencyNav/CurrencyNav.Container';
import BtnLogin from './BtnLogin/BtnLogin';

import css from './HeaderNav.module.css';

const ativeStyle = {
  color: 'tomato',
};

class Header extends Component {
  state = {};

  render() {
    return (
      <ul className={css.wrapHeader}>
        <li className={css.routeHeader}>
          <NavLink
            className={css.logoLink}
            activeStyle={ativeStyle}
            to="/"
            exact
          >
            <Logo />
          </NavLink>
        </li>

        {/* <li className={css.routeHeader}>
          <NavLink
            className={css.contactsLink}
            to="/contacts"
            exact
            activeStyle={ativeStyle}
          >
            <Contacts />
          </NavLink>
        </li> */}

        <li className={css.routeHeader}>
          <NavLink
            className={css.weaterLink}
            to="/weather"
            exact
            activeStyle={ativeStyle}
          >
            {/* <WeatherNav /> */}
          </NavLink>
        </li>

        <li className={css.routeHeader}>
          <NavLink
            className={css.rateLink}
            to="/currency"
            exact
            activeStyle={ativeStyle}
          >
            <CurrencyNav />
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
