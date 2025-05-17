import React from 'react';
import products from '../../lib/data/products';
import ProductCard from './PopularProductCard';
export default function ProductsGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
