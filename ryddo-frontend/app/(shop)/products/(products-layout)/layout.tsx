import React from 'react';
import ProductsFilter from '../../../../components/product/ProductsFilter';
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-4 py-16'>
      <ProductsFilter />
      <div className='flex-1 overflow-visible'>{children}</div>
    </div>
  );
}
