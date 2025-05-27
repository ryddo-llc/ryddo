import React from 'react';
import ProductsHero from '../../components/products/ProductsHero';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-gray-50'>
      <ProductsHero />
      {children}
    </div>
  );
}
