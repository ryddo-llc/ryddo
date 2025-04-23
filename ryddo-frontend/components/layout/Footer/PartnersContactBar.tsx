import Link from 'next/link';
import React from 'react';

type BrandProps = {
  name: string;
  image: string;
};

export default function PartnersContactBar() {
  const brands = [
    { name: 'Super73', image: '/' },
    { name: 'Cake', image: '/' },
    { name: 'MiniMotors', image: '/' },
  ];
  return (
    <div className='bg-[#333333] flex flex-col md:flex-row text-white items-center font-bold'>
      <div className='h-16 flex items-center border-r border-white px-6 md:px-10'>
        <Link href='/'>Sign up for Free ryddo adventures 2</Link>
      </div>

      <div className='flex-1 flex justify-center gap-4 md:gap-32 py-4 md:py-0'>
        {brands.map((brand: BrandProps) => (
          <Link key={brand.name} href={brand.image}>
            {brand.name}
          </Link>
        ))}
      </div>

      <div className='flex w-full md:w-auto'>
        <div className='h-16 flex items-center justify-center border-l border-white w-1/2 md:w-60'>
          <Link href='/'>323.676.7433</Link>
        </div>

        <Link
          href='/service'
          className='bg-[#F92F7B] h-16 flex items-center justify-center w-1/2 md:w-60 border-l border-white'
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
