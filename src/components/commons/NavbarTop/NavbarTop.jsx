import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../Header/Logo/Logo';
import WeatherNav from '../../Header/WeatherNav/WeatherNav';
import CurrencyNav from '../../Header/CurrencyNav/CurrencyNav';
import InfoSite from '../../Header/Info/Info';
import DropdownProfile from '../DropdownProfile/DropdownProfile';

import { useDetectOutsideClick } from '../../../utils/hooks/useDetectOutsideClick';

import css from './NavbarTop.module.scss';

const NavbarTop = () => {
  const ativeStyle = {
    color: 'tomato',
    fill: 'tomato',
  };

  const refProfile = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(refProfile, false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <ul className={css.wrapList}>
      <li className={css.routeHeader}>
        <NavLink exact activeStyle={ativeStyle} to="/">
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

      <li
        className={`${css.routeHeader} ${css.dropdown}`}
        onClick={handleClick}
        onKeyPress={handleClick}
        aria-hidden
      >
        <NavLink to="/info" exact activeStyle={ativeStyle}>
          <InfoSite />
        </NavLink>
        <DropdownProfile refProfile={refProfile} isActive={isActive} />
      </li>
    </ul>
  );
};

export default NavbarTop;

// const route = [
//   {
//     url: '/',
//     icon: <InfoSite />,
//   },
//   {
//     url: '/weather',
//     icon: <WeatherNav />,
//   },
//   {
//     url: '/currency',
//     icon: <CurrencyNav />,
//   },
//   {
//     url: '/info',
//     icon: <Logo />,
//   },
// ];
