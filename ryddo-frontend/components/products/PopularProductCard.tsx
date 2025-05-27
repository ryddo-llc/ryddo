import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: {
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
  };
  showBadge?: boolean;
}

export default function PopularProductCard({
  product,
  showBadge,
}: ProductCardProps) {
  return (
    <article className='relative flex flex-col items-center mb-8 rounded-[10px] overflow-hidden border border-gray-200'>
      <Link
        href={`/products/${product.type}/${product.id}`}
        title={`View details for ${product.name}`}
        className='block w-full'
      >
        {/* Product Badge */}
        {showBadge && (
          <div className='absolute top-3 left-3 z-10'>
            {product.onSale && (
              <span className='bg-pink-500 text-white text-xs px-2 py-1 rounded-md block mb-1'>
                Sale
              </span>
            )}
            {product.new && (
              <span className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md block mb-1'>
                New
              </span>
            )}
            {product.bestSeller && (
              <span className='bg-yellow-500 text-white text-xs px-2 py-1 rounded-md block mb-1'>
                Best
              </span>
            )}
          </div>
        )}

        {/* Product Image */}
        <div>
          <Image
            src={product.image}
            alt={`${product.name} || 'Product image'}`}
            width={300}
            height={300}
            className='w-full h-full object-contain p-4'
            priority
          />
        </div>

        {/* Product Info */}
        <h2 className='text-center text-zinc-800 text-sm font-bold mb-2 pt-2 leading-none'>
          {product.name}
        </h2>
        <div className='text-center mb-4'>
          {product.originalPrice && (
            <span className='line-through text-neutral-500 text-base font-semibold mr-2'>
              {product.originalPrice}
            </span>
          )}
          {product.salePrice && (
            <span className='text-black font-bold'>{product.salePrice}</span>
          )}
          {product.price && (
            <span className='text-black font-bold'>{product.price}</span>
          )}
          {product.priceRange && (
            <span className='text-black font-bold'>{product.priceRange}</span>
          )}
        </div>
      </Link>
    </article>
  );
}
