import React from 'react';
import Products from '../../commons/Products/Products';
import css from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={css.menu}>
      {/* Menu -&gt; */}
      <Products />
    </div>
  );
};

export default Menu;
