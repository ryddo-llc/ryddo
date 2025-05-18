import React from 'react';
import ProductsFilter from '../../../../components/product/ProductsFilter';
import ProductsGrid from '../../../../components/product/ProductsGrid';
import products from '../../../../lib/data/products';
export default function layout() {
  return (
    <div className='flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-4 py-16'>
      <ProductsFilter />
      <ProductsGrid products={products} />
    </div>
  );
}
