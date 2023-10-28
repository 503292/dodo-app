import React from 'react';

import css from './ProductOne.module.scss';

// import { ReactComponent as Brand } from '../../../assets/image/alatyr.svg';
const ProductOne = ({ product }) => (
  <div className={css.product}>
    <div className={css.aboutProduct}>
      <h2 className={css.productName}>{product.name}</h2>
      <p className={css.productDescription}>{product.description}</p>
      <br />
      <p className={css.productCount}>Кількість: {product.count}</p>
      <p className={css.productColor}>Колір: {product.color}</p>
      <p className={css.productEngraving}>
        Гравіровка: {product.engraving ? 'Так' : 'Ні'}
      </p>
      <p className={css.productMaterial}>
        Матеріали: {product.material.join(', ')}
      </p>
      <p className={css.productSize}>Діаметр: {product.size} мм</p>
      <p className={css.productWeight}>Вага: {product.weight} г</p>
      <p className={css.productProductType}>
        Тип товару: {product.productType}
      </p>
      <p className={css.productCountryOfOrigin}>
        Країна виробництва: {product.countryOfOrigin}
      </p>
      <p className={css.productDeliveryTime}>
        Термін доставки: {product.deliveryTime}
      </p>
      {/* <p className={css.productCertificates}>
        Сертифікати: {product.certificates.join(', ')}
      </p> */}
      <p className={css.productCustomization}>
        Індивідуалізація: {product.customization ? 'Так' : 'Ні'}
      </p>
      <br />
      <p className={css.productPrice}>Ціна: {product.price}$/pcs</p>
    </div>

    {product.images && (
      <div className={css.productImages}>
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} ${index + 1}`}
            className={css.productImage}
          />
        ))}
      </div>
    )}
  </div>
);

export default ProductOne;

// <h3 className={css.title}>Алатир</h3>
// <div className={css.wrapSubtitle}>
//   <div className={css.wrapBrand}>
//     {/* <img src="../../.." alt="FotoProduct" /> */}
//     <Brand />
//   </div>

//   {/* QR code */}

//   <fieldset className={`${css.fieldset}`}>
//     <legend className={css.legend}>
//       <strong>Alatyr Corporation.</strong>{' '}
//     </legend>
//     {/* <User/> Co */}
//     {/*  */}
//     <p>Contacts</p>
//     <p>Location </p> {/* TODO with country flag */}
//     <p>icon with check {/* TODO green */}</p>
//     <p>Create</p>
//     <p>Phone</p>
//     {/* <p>Вага: 300гр.</p>
//       <p>Висота: 20см.</p>
//       <p>Ширина: 20см.</p> */}
//   </fieldset>
// </div>
