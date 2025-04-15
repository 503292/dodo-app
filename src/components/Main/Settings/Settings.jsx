import React from 'react';
import QuickAccessGuide from '../../commons/QuickAccessGuide/QuickAccessGuide';

import css from './Settings.module.scss';

const Settings = () => {
  return (
    <div className={css.settings}>
      <QuickAccessGuide />
    </div>
  );
};

export default Settings;
