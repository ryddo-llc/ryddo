'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type navigationLinksProps = {
  name: string;
  path: string;
};
export default function HeaderNavigation() {
  const currentPathname = usePathname();
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
    <div className='flex gap-4 lg:gap-8'>
      {navigationLinks.map((link: navigationLinksProps) => (
        <Link
          key={link.name}
          href={link.path}
          className={`font-extrabold hover:underline hover:decoration-[#F92F7B] hover:underline-offset-6 hover:decoration-2 ${
            currentPathname === link.path ? 'text-[#F92F7B]' : 'text-black'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
