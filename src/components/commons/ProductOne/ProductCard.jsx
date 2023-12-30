import React from 'react';

import productUrl from '../../../assets/image/products/epoxyM1.jpg';
import { ReactComponent as Heart } from '../../../assets/image/heart.svg';

import css from './ProductCard.module.scss';

const product = {
  src: productUrl,
  title: 'Карта України',
  price: '50',
  // stars: '',
  status: '',
};

const ProductCard = () => {
  return (
    <div className={css.productCard}>
      <div className={css.wrapImg}>
        <img src={product.src} alt="name" />
      </div>
      <div className={css.description}>
        <h3>{product.title}</h3>

        <div>
          {/* <p>Stars</p> */}
          <p>Price: {product.price}$</p>
          <button>Купити </button>
        </div>

        {/* Наявність- Купити/Продано */}
      </div>
      {/* <Heart /> */}
    </div>
  );
};

export default ProductCard;
