import React from 'react';
// TODO Not use now / in progress when fix animation
// import AnimationToogle from '../../commons/-AnimationToogle/AnimationToogle';
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
