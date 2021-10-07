import React from 'react';

import { ReactComponent as LogoMap } from '../../../assets/image/logo/mapUa.svg';

import css from './Info.module.css';

const Info = () => (
  <>
    <div className={css.wrapLogo}>
      <LogoMap className={css.logoMap} />
    </div>
  </>
);

export default Info;
