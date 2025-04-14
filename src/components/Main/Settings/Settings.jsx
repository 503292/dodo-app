import React from 'react';
import QuickAccessGuide from '../../commons/QuickAccessGuide/QuickAccessGuide';
import Calculator from '../../commons/Calculator';

import css from './Settings.module.scss';

const Settings = () => {
  return (
    <div className={css.settings}>
      <QuickAccessGuide />
      <Calculator />
    </div>
  );
};

export default Settings;
