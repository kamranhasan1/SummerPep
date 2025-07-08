import React, { useState } from 'react';
import ProductItem from './ProductItem';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  
  const product = [
    {item:"Apple",price:40,total:1},
    {item:"Banana",price:6, total:0},
    {item:"Orange",price:20,total:0}
  ];
  return (
    <div className='m-4'>
      <h1 className='text-left'>Shopping Cart</h1>
      <ProductItem productData={product} />
    </div>
  );
};

export default App;