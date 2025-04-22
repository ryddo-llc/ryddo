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
      path: '',
    },
    {
      name: 'e-bikes',
      path: '',
    },
    {
      name: 'e-scooters',
      path: '',
    },
    {
      name: 'gear',
      path: '',
    },
    {
      name: 'accessories',
      path: '',
    },
    {
      name: 'service',
      path: '',
    },
  ];
  return (
    <div className='flex gap-4'>
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
