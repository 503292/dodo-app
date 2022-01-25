import React from 'react';

import NavbarTop from '../commons/NavbarTop/NavbarTop';

import css from './Header.module.scss';

const Header = () => {
  return (
    <div className={css.wrapHeader}>
      <NavbarTop />
    </div>
  );
};

export default Header;
