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
      path: '/products',
    },
    {
      name: 'e-scooters',
      path: '/products',
    },
    {
      name: 'gear',
      path: '/products',
    },
    {
      name: 'accessories',
      path: '/products',
    },
    {
      name: 'service',
      path: '/service',
    },
  ];
  return (
    <div className='flex gap-8'>
      {navigationLinks.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className='text-black font-extrabold'
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
