import Link from 'next/link';
import React from 'react';
type ShopLinksProps = {
  name: string;
  link: string;
};
export default function ShopLinks() {
  const shopLinks = [
    {
      name: 'E-scooters',
      link: '/products',
    },
    {
      name: 'E-bikes',
      link: '/products',
    },
    {
      name: 'Gear',
      link: '/products',
    },
    {
      name: 'Accessories',
      link: '/products',
    },
  ];

  return (
    <div className='w-full'>
      <h3 className='text-sm font-semibold mb-4'>Shop</h3>
      <div className='flex flex-col space-y-3'>
        {shopLinks.map((shop: ShopLinksProps) => (
          <Link
            className='text-[#333333] hover:text-[#F92F7B]'
            key={shop.name}
            href={shop.link}
          >
            {shop.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
