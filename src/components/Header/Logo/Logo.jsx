import React from 'react';

import logo from '../../../assets/image/logo.png';
import css from './Logo.module.css';

const Logo = () => (
  <>
    <div className={css.wrapLogo}>
      <img
        className={css.logoImg}
        src={logo}
        width="40"
        height="40"
        alt="logo"
      />
      <p className={css.titleSite}>DoDo</p>
    </div>
  </>
);

export default Logo;
