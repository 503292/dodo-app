import React from 'react';
import Carousel, { CarouselItem } from '../Carousel/Carousel';

import css from './ProductOne.module.scss';

// import { ReactComponent as Brand } from '../../../assets/image/alatyr.svg';
const ProductOne = ({ product }) => (
  <div className={css.product}>
    <div className={css.wrapCarousel}>
      <Carousel>
        {product?.images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              className={css.productImage}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
    <div className={css.aboutProduct}>
      <h2 className={css.productName}>{product.name}</h2>
      <div>
        <p className={css.productDescription}>{product.description}</p>
        <ProductCharacteristics product={product} />
      </div>
    </div>
  </div>
);

export default ProductOne;

const ProductCharacteristics = ({ product }) => {
  return (
    <div className={css.wrapCharateristic}>
      <p className={css.productMaterial}>
        <strong>Матеріал: </strong>
        {product.material.join(', ')}
      </p>
      <p className={css.productDeliveryTime}>
        <strong>Виготовлення-доставка: </strong>
        {product.deliveryTime}
      </p>
      <p className={css.productCountryOfOrigin}>
        <strong>Країна виробництва: </strong>
        {product.countryOfOrigin}
      </p>
      {/* <p className={css.productSize}>Діаметр: {product.size} мм</p> */}
      {/* <p className={css.productPrice}>Ціна: {product.price} $</p> */}
    </div>
  );
};
