import React from 'react';

import ProductCard from '../components/commons/ProductOne/ProductCard.jsx';
import { sendMessage } from '../utils/requestNotificationPermission.js';

const RandomProductList = () => {
  const handlerMessage = () => {
    const random = (Math.random() * 100).toFixed(0);
    console.log(random, 'random num');
    sendMessage(`random -> ${random}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'auto',
        justifyContent: 'center',
      }}
    >
      <button onClick={() => handlerMessage()}>Click</button>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default RandomProductList;
