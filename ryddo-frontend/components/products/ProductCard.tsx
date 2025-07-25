import Image from 'next/image';
import Link from 'next/link';
import { getCldImageUrl } from 'next-cloudinary';
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
}

export default function ProductCard({ product }: ProductCardProps) {
  //making sure name matches the same format its in the cloudinary CDN
  const cloudinaryFormattedName = product.name
    .replace(/\s+/g, '-')
    .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
    .toLowerCase();

  const imageUrl = getCldImageUrl({
    src: cloudinaryFormattedName,
  });

  return (
    <article className='relative flex flex-col items-center mb-5 rounded-[10px] overflow-hidden border border-gray-100 bg-white w-full max-w-md'>
      <Link
        href={`/product/${product.type}/${product.id}`}
        title={`View details for ${product.name}`}
        className='block w-full h-full'
      >
        <div className='absolute top-5 left-4 z-10'>
          {product.onSale && (
            <span className='bg-pink-500 text-white text-xs px-4 py-0.5 rounded-md block mb-1'>
              Sale!
            </span>
          )}
          {/* {product.new && (
            <span className='bg-blue-500 text-white text-xs px-2 py-0.5 rounded-md block mb-1'>
              New
            </span>
          )}
          {product.bestSeller && (
            <span className='bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-md block mb-1'>
              Best
            </span>
          )} */}
        </div>
        {/* Product Image */}
        <div className='w-full px-2'>
          <Image
            src={imageUrl}
            alt={`${product.name} || 'Product image'}`}
            width={400}
            height={400}
            className='w-full h-[315px] object-contain rounded-[10px]'
            priority
          />
        </div>
        {/* Product Info */}
        <div className='text-center p-3'>
          <h2 className='text-zinc-800 text-base font-bold'>{product.name}</h2>
          <div>
            {product.originalPrice && (
              <span className='line-through text-neutral-500 text-sm mr-2'>
                {product.originalPrice}
              </span>
            )}
            {product.salePrice && (
              <span className='text-black font-medium'>
                {product.salePrice}
              </span>
            )}
            {product.price && (
              <span className='text-black'>{product.price}</span>
            )}
            {product.priceRange && (
              <span className='text-black'>{product.priceRange}</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
