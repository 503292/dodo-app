import React from 'react';

import { ReactComponent as LogoMap } from '../../../assets/image/mapUa.svg';

import css from './Logo.module.css';

const Logo = () => (
  <div className={css.wrapLogo}>
    <LogoMap className={css.logoMap} />
    {/* <img className={css.logoImg} src={logo} width="40" height="40" alt="logo" /> */}
    {/* <p className={css.titleSite}>DoDo</p> */}
  </div>
);

export default Logo;
