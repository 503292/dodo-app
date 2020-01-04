import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import css from './DoDoHelper.module.css';

const DoDoHelper = () => (
  <>
    <div className={css.wrapDoDoHelper}>
      <div className={css.nameDoDoHelper}>DoDoHelper</div>
      <div className={css.wrapStatusIcon}>
        <FontAwesomeIcon className={css.statusIcon} icon={faCircle} />
        <p className={css.messageEnterCount}>3</p>
      </div>
    </div>
  </>
);

export default DoDoHelper;
