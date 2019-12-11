import React from 'react';
import css from './BtnLogin.module.css';

const BtnIn = () => (
  <>
    <div className={css.wrapBtn}>
      <button className={css.login} type="button">
        Login
      </button>
      <button className={css.logout} type="button">
        Logout
      </button>
    </div>
  </>
);

export default BtnIn;
