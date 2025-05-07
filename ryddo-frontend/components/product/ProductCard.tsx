import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: number;
    image: string;
    name: string;
    originalPrice?: string;
    salePrice?: string;
    price?: string;
    priceRange?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div key={product.id} className='flex flex-col items-center mb-8'>
      {/* Product Image */}
      <div className='bg-gradient-to-b from-blue-100 to-yellow-100 w-full rounded-[10px] overflow-hidden mb-6'>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className='w-full object-contain h-64 p-4'
        />
      </div>

      {/* Product Info */}
      <h3 className='text-center text-zinc-800 text-med font-bold mb-2 leading-none'>
        {product.name}
      </h3>
      <div className='text-center mb-4'>
        {product.originalPrice && (
          <span className='line-through text-neutral-500 text-base font-semibold mr-2'>
            {product.originalPrice}
          </span>
        )}
        {product.salePrice && <span>{product.salePrice}</span>}
        {product.price && <span>{product.price}</span>}
        {product.priceRange && <span>{product.priceRange}</span>}
      </div>
    </div>
  );
}
