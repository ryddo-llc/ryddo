import Link from 'next/link';
import React from 'react';

type navigationLinksProps = {
  name: string;
  path: string;
};
export default function HeaderNavigation() {
  const navigationLinks = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'e-bikes',
      path: '/products/e-bikes',
    },
    {
      name: 'e-scooters',
      path: '/products/e-scooters',
    },
    {
      name: 'gear',
      path: '/products/gear',
    },
    {
      name: 'accessories',
      path: '/products/accessories',
    },
    {
      name: 'service',
      path: '/products/service',
    },
  ];
  return (
    <div className='flex gap-8'>
      {navigationLinks.map((link: navigationLinksProps) => (
        <Link
          key={link.name}
          href={link.path}
          className='text-black font-extrabold hover:underline hover:decoration-[#F92F7B] hover:underline-offset-6 hover:decoration-2'
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
