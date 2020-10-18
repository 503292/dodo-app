import React from 'react';

import { ReactComponent as ShortTask } from '../../../../assets/image/cookie-bite.svg';
import { ReactComponent as LongTask } from '../../../../assets/image/world.svg';

import css from './LongShortTaskButtons.module.scss';

const LongShortTaskButtons = () => {
  return (
    <div className={css.wrapBtn}>
      <button className={`${css.shortTaskBtn} ${css.btn}`} type="button">
        <ShortTask />
      </button>
      <button className={`${css.longTaskBtn} ${css.btn}`} type="button">
        <LongTask />
      </button>
    </div>
  );
};

export default LongShortTaskButtons;
