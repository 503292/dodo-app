import React from 'react';

import { ReactComponent as LogoMap } from '../../../assets/image/logo/mapUa.svg';

import css from './Logo.module.css';

const Logo = () => (
  <>
    <div className={css.wrapLogo}>
      <LogoMap className={css.logoMap} />
    </div>
  </>
);

export default Logo;
