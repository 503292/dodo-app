import React from 'react';

import css from './DoDoHelper.module.css';

const DoDoHelper = () => (
  <>
    <button className={css.wrapDoDoHelper} type="button">
      <p>DoDoHelper</p>
      <p>status on/of color</p>
      <p>counter messages</p>

      {/* <p className={css.nameContact}>Ivan</p>
      <p className={css.statusContact}>status</p> */}
    </button>
  </>
);

export default DoDoHelper;
