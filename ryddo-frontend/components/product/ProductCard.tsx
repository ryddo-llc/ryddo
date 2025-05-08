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
    <div className='flex flex-col items-center mb-8'>
      {/* Product Image */}
      <div className='rounded-[10px] overflow-hidden'>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className='w-full h-full object-cover '
          priority
        />
      </div>

      {/* Product Info */}
      <h3 className='text-center text-zinc-800 text-sm font-bold mb-2 pt-2 leading-none'>
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
