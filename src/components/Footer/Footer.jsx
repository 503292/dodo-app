import React from 'react';
import Timer from './Timer/Timer';
import ToggleTheme from './ToggleTheme/ToggleTheme';

import css from './Footer.module.css';

const Footer = () => (
  <>
    <Timer className={css.timer} />
    <ToggleTheme className={css.toglleTheme} />
  </>
);

export default Footer;
