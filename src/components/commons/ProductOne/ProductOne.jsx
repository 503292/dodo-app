import React, { useState } from 'react';

import css from './ProductOne.module.scss';

const ProductOne = () => {
  const [imgUrl, setImgUrl] = useState('');

  return <li className={css.ProductOne}>ProductOne - (urlImg) - {imgUrl}</li>;
};

export default ProductOne;
