import React from 'react';
import ProductsHero from '../../components/product/ProductsHero';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ProductsHero />
      {children}
    </div>
  );
}
