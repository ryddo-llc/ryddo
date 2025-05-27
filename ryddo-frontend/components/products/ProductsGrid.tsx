import React from 'react';
import ProductCard from './ProductCard';

interface ProductProps {
  id: number;
  type: string;
  image: string;
  name: string;
  originalPrice?: string;
  salePrice?: string;
  price?: string;
  priceRange?: string;
  onSale?: boolean;
  new?: boolean;
  bestSeller?: boolean;
}
export default function ProductsGrid({
  products,
}: {
  products: ProductProps[];
}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {products.map((product: ProductProps) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
