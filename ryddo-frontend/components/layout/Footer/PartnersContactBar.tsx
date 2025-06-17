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
    <div className='bg-black flex flex-col lg:flex-row text-white items-stretch font-bold sticky bottom-0 left-0 right-0 z-50 text-xs sm:text-sm'>
      {/* Newsletter Signup Section */}
      <div className='h-12 sm:h-14 md:h-16 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white px-3 sm:px-6 md:px-10 lg:px-12 xl:px-18 hover:bg-[#F92F7B] transition-colors duration-200'>
        <Link href='/' className='text-center'>
          <span className='hidden sm:inline'>
            Sign up for Free ryddo adventures
          </span>
          <span className='sm:hidden'>Free adventures</span>
          <span className='text-[#F92F7B] ml-1'>^</span>
        </Link>
      </div>

      {/* Partners/Brands Section */}
      <div className='flex-1 flex justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 2xl:gap-32 px-3 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-0 min-h-[48px] sm:min-h-[56px] md:min-h-[64px]'>
        {brands.map((brand: BrandProps) => (
          <Link
            key={brand.name}
            href='/products'
            className='flex-shrink-0 hover:opacity-80 transition-opacity duration-200'
          >
            <Image
              src={brand.image}
              width={80}
              height={20}
              alt={brand.name}
              priority
              className='w-16 h-auto sm:w-20 md:w-24 lg:w-28 xl:w-32 max-w-[124px]'
            />
          </Link>
        ))}
      </div>

      {/* Contact Actions Section */}
      <div className='flex w-full lg:w-auto border-t lg:border-t-0'>
        {/* Phone Number */}
        <div className='h-12 sm:h-14 md:h-16 flex items-center justify-center border-l border-white w-1/2 lg:w-44 xl:w-52 2xl:w-60 hover:bg-[#F92F7B] transition-colors duration-200'>
          <Link href='tel:3236767433' className='text-center px-2'>
            <span className='hidden sm:inline'>323.676.7433</span>
            <span className='sm:hidden text-xs'>Call Us</span>
          </Link>
        </div>

        {/* Book Now Button */}
        <Link
          href='/service'
          className='bg-[#F92F7B] h-12 sm:h-14 md:h-16 flex items-center justify-center w-1/2 lg:w-44 xl:w-52 2xl:w-60 hover:bg-[#d41f63] transition-colors duration-200'
        >
          <p className='font-bold'>Book Now</p>
        </Link>
      </div>
    </div>
  );
}
