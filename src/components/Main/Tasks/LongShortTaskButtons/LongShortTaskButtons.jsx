import React from 'react';

import { ReactComponent as ShortTask } from '../../../../assets/image/cookie-bite.svg';
import { ReactComponent as LongTask } from '../../../../assets/image/world.svg';

import css from './LongShortTaskButtons.module.css';

const LongShortTaskButtons = () => {
  return (
    <div className={css.wrapBtn}>
      <button className={`${css.shortTaskBtn} ${css.btn}`} type="button">
        <ShortTask className={css.shortTaskIcon} />
      </button>
      <button className={`${css.longTaskBtn} ${css.btn}`} type="button">
        <LongTask className={css.longTaskIcon} />
      </button>
    </div>
  );
};

export default LongShortTaskButtons;
