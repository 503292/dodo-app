import React from 'react';

import logo from '../../../assets/image/logo-66x66.png';
import css from './Logo.module.css';

const Logo = () => (
  <>
    <div className={css.wrapLogo}>
      <img className={css.logoImg} src={logo} alt="logo" />
      <p className={css.siteName}>DoDo</p>
    </div>
  </>
);

export default Logo;
