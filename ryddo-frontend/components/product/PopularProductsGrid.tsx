import React from 'react';
import products from '../../lib/data/products';
import ProductCard from './PopularProductCard';
export default function PopularProductsGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
