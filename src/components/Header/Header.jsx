import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Info/Info';
import WeatherNav from './WeatherNav/WeatherNav';
import CurrencyNav from './CurrencyNav/CurrencyNav';
import InfoSite from './Logo/Logo';

import css from './Header.module.scss';

const ativeStyle = {
  color: 'tomato',
  fill: 'tomato',
};

const Header = () => {
  return (
    <div className={css.wrapHeader}>
      <ul className={css.wrapList}>
        <li className={css.routeHeader}>
          <NavLink activeStyle={ativeStyle} to="/" exact>
            <InfoSite />
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

        <li className={`${css.routeHeader} ${css.dropdown}`}>
          <Logo />
        </li>
      </ul>
    </div>
  );
};

export default Header;
