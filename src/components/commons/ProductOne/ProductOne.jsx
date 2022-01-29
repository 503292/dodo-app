import React, { useState } from 'react';

import css from './ProductOne.module.scss';

import { ReactComponent as Brand } from '../../../assets/image/alatyr.svg';
const ProductOne = () => {
  const [imgUrl, setImgUrl] = useState('');

  return (
    <li className={css.productOne}>
      <h3 className={css.title}>Заголовок</h3>
      <div className={css.wrapSubtitle}>
        <div className={css.wrapBrand}>
          {/* <img src="../../.." alt="FotoProduct" /> */}
          <Brand />
        </div>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}> Другий заговолок </legend>
          <p>Вага: 300гр.</p>
          <p>Висота: 20см.</p>
          <p>Ширина: 20см.</p>
        </fieldset>
      </div>
      {/*  */}
      <fieldset className={css.fieldset}>
        <legend className={css.legend}> Опис </legend>
        {/* <p>Опис</p> */}
        <p>Особливості</p>
        <p>Теги</p>
        <p>Наявність</p>
        <p>Ціна</p>
      </fieldset>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}> Локація </legend>
        <p>Доставка локація від (аддрес)</p>
      </fieldset>
      {/*  */}
      <fieldset className={css.fieldset}>
        <legend className={css.legend}> Автор </legend>
        <p>Дата і підпис</p>
      </fieldset>
    </li>
  );
};

export default ProductOne;
