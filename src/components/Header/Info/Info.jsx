// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { ReactComponent as LogoMap } from '../../../assets/image/logo/mapUa.svg';

import css from './Info.module.css';

const Info = () => {
  // TODO in progress dropdown
  // const [isOpen, setisOpen] = useState(false);
  return (
    <div className={css.wrapInfo}>
      <div className={css.wrapLogo}>
        <LogoMap className={css.logoMap} />
      </div>
    </div>
  );
};

export default Info;
