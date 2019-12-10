import React from 'react';
import Timer from './Timer/Timer';
import ToglleTheme from './ToglleTheme/ToglleTheme';

import css from './Footer.module.css';

const Footer = () => (
  <>
    <Timer className={css.timer} />
    <ToglleTheme className={css.toglleTheme} />
  </>
);

export default Footer;
