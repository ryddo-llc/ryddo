import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import cake from '../../../public/images/cake-logo.svg';
import super73 from '../../../public/images/super-73-logo.svg';
import minimotors from '../../../public/images/Minimotors-logo1.svg';

type BrandProps = {
  name: string;
  image: string;
};

export default function PartnersContactBar() {
  const brands = [
    { name: 'Super73', image: cake },
    { name: 'Cake', image: super73 },
    { name: 'MiniMotors', image: minimotors },
  ];
  return (
    <div className='bg-black flex flex-col md:flex-row text-white items-center font-bold sticky z-51 text-xs'>
      <div className='h-16 flex items-center border-r border-[#FFFFFF] px-10 md:px-18 hover:bg-[#F92F7B]'>
        <Link href='/'>
          Sign up for Free ryddo adventures{' '}
          <span className='text-[#F92F7B]'>^</span>
        </Link>
      </div>

      <div className='flex-1 flex justify-center items-center gap-6 md:gap-20 lg:gap-32 px-0 md:px-10'>
        {brands.map((brand: BrandProps) => (
          <Link key={brand.name} href='/products'>
            <Image
              src={brand.image}
              width={124}
              height={30}
              alt={brand.name}
              priority
            />
          </Link>
        ))}
      </div>

      <div className='flex w-full md:w-auto'>
        <div className='h-16 flex items-center justify-center border-l border-[#FFFFFF] w-1/2 md:w-60 hover:bg-[#F92F7B] hover:text-black'>
          <Link href='/'>323.676.7433</Link>
        </div>

        <Link
          href='/service'
          className='bg-[#F92F7B] h-16 flex items-center justify-center w-1/2 md:w-60 border-l border-[#F92F7B]'
        >
          <p>Book Now</p>
        </Link>
      </div>
    </div>
  );
}
