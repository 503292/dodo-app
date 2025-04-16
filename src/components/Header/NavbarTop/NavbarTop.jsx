import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import WeatherNav from '../WeatherNav/WeatherNav';
import CurrencyNav from '../CurrencyNav/CurrencyNav';
import InfoSite from '../Info/Info';
import DropdownProfile from '../../commons/DropdownProfile/DropdownProfile';

import { ReactComponent as Alatyr } from '../../../assets/image/nav/alatyr.svg';

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
      {/* TODO in progress this page */}
      {/* <li className={css.routeHeader}>
        <NavLink exact activeStyle={ativeStyle} to="/planet">
          <Sun />
        </NavLink>
      </li> */}
      <li className={css.routeHeader}>
        <NavLink exact activeStyle={ativeStyle} to="/">
          <Alatyr />
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
      >
        <InfoSite />
        <DropdownProfile refProfile={refProfile} isActive={isActive} />
      </li>
    </ul>
  );
};

export default NavbarTop;
