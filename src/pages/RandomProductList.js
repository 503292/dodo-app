import React from 'react';

import ProductCard from '../components/commons/ProductOne/ProductCard.jsx';

const RandomProductList = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'auto',
        justifyContent: 'center',
      }}
    >
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
