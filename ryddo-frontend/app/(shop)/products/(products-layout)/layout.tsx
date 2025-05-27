import React from 'react';
import ProductsFilter from '../../../../components/products/ProductsFilter';

import ProductLayout from '../../../../components/products/ProductLayout';
export default function layout() {
  return (
    <div className='flex flex-col md:flex-row gap-10 max-w-7xl mx-auto py-15'>
      <ProductsFilter />
      <ProductLayout />
    </div>
  );
}
