import React from 'react';

import Product from '../ProductOne/ProductOne';
import css from './Products.module.scss';

import { products } from '../../../utils/product';

const Products = () => {
  return (
    <ul className={`${css.products} scrollbarThumb`}>
      {/* TODO add some loop - map() */}
      <Product product={products[0]} />
      {/* <Product /> */}
      {/* <Product /> */}
    </ul>
  );
};

export default Products;
