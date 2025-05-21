'use client';
import React from 'react';
import Image from 'next/image';

import { usePathname } from 'next/navigation';
export default function ProductsHero() {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter((part) => part !== '');
  const currentPathname = pathParts[1];
  return (
    <section
      aria-labelledby='Product-heading'
      className='w-full h-[15vh] md:h-[25vh] lg:h-[30vh] relative flex items-center'
    >
      {/* Background Image Container */}
      <div className='absolute inset-0 w-full h-full opacity-40'>
        <Image
          src={`/images/Products/backgrounds/${currentPathname}.jpg`}
          alt='Person riding an electric bicycle on a scenic coastal road'
          fill
          className='object-cover w-full h-full'
          priority
        />
      </div>
      <h2 className='text-zinc-800 text-5xl font-extrabold font-["Nunito"] leading-[67.20px] px-30 pt-40 relative'>
        {currentPathname}
        <span className='text-[#F92F7B] text-7xl font-["Inter"] leading-[67.20px]'>
          .
        </span>
      </h2>
    </section>
  );
}
