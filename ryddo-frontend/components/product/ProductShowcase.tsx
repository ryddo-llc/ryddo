import React from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProductShowcaseProps {
  ImageURL: string;
}

const ProductShowcase = ({ ImageURL }: ProductShowcaseProps) => {
  return (
    <section className='flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-white w-full min-h-[40vh] md:min-h-[50vh] lg:min-h-[80vh] max-h-screen relative overflow-hidden'>
      {/* Additional gradient overlay for more visible separation */}
      <div
        className='absolute inset-0 bg-blue-100'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      ></div>

      {/* Background Super73 Text */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden'>
        <span className='text-gray-300 uppercase leading-loose tracking-widest font-black text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] whitespace-nowrap select-none opacity-30'>
          Super73
        </span>
      </div>

      <button className='absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-110'>
        <FaChevronLeft />
      </button>

      {/* Right Navigation Arrow */}
      <button className='absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-110'>
        <FaChevronRight />
      </button>

      {/* Main Content - Removed pl-120 and improved centering */}
      <div className='relative z-10 w-full h-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto'>
        {/* Title - Positioned above bike */}
        <div className='absolute -top-4 md:-top-8 right-2 md:right-4 text-right'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight'>
            <span className='text-pink-500'>Performance</span>
            <br />
            <span className='text-gray-900'>adventurer</span>
          </h1>
        </div>

        {/* Bike Image - Perfectly centered */}
        <div className='flex items-center justify-center w-full h-full'>
          <div className='relative flex items-center justify-center max-w-4xl w-full'>
            <Image
              src={ImageURL}
              alt='Super-73'
              width={1000}
              height={600}
              priority
              className='w-full h-auto object-contain max-w-full max-h-[60vh]'
            />

            {/* Decorative elements */}
            <div className='absolute -top-4 -left-4 w-24 h-24 bg-pink-500 rounded-full opacity-10 blur-xl'></div>
            <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-xl'></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent'></div>
    </section>
  );
};

export default ProductShowcase;
