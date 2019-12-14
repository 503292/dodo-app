import React from 'react';

import css from './DoDoHelper.module.css';

const DoDoHelper = () => (
  <>
    <div className={css.wrapDoDoHelper} type="button">
      <p className={css.nameDoDoHelper}>DoDoHelper</p>
      <p className={css.messageEnterCount}>3</p>
    </div>
  </>
);

export default DoDoHelper;
