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
    <div>
      <h1>Shop</h1>
      <div className='flex flex-col'>
        {shopLinks.map((shop: ShopLinksProps) => (
          <Link key={shop.name} href={shop.link}>
            {shop.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
