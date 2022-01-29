import React from 'react';

import Product from '../ProductOne/ProductOne';
import css from './Products.module.scss';

const Products = () => {
  return (
    <ul div className={`${css.products} scrollbarThumb`}>
      <Product />
      {/* <Product /> */}
      {/* <Product /> */}
    </ul>
  );
};

export default Products;
