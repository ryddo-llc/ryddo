import React from 'react';
import Image from 'next/image';
import { getCldImageUrl } from 'next-cloudinary';
import SpecsGrid from '../SpecsGrid';
import PriceCard from '../PriceCard';
import OffersCard from '../OffersCard';

export default function BikeDetailPage() {
  const backgroundUrl = getCldImageUrl({
    src: 'detailpage',
  });

  const bikeImage = getCldImageUrl({
    src: 'super-73-detailpage-image',
  });

  return (
    <section
      aria-labelledby='product-heading'
      className='w-full min-h-[40vh] md:min-h-[50vh] lg:min-h-[80vh] max-h-screen relative overflow-hidden'
    >
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full opacity-40'>
        <Image
          src={backgroundUrl}
          alt='Person riding an electric bicycle on a scenic coastal road'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 h-full flex flex-col justify-center px-4 md:px-8 py-8'>
        <div className='max-w-7xl w-full mx-auto h-full flex flex-col'>
          {/* Top Section - Product Name & Stock */}
          <div className='text-center mb-4 md:mb-8'>
            {/* Stock Status */}
            <div className='inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4'>
              <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
              In Stock
            </div>

            {/* Product Title */}
            <h1
              id='product-heading'
              className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-zinc-800 leading-tight font-["Nunito"]'
            >
              Super73-RX<span className='text-[#F92F7B]'>.</span>
            </h1>
            <p className='self-stretch text-center justify-center text-neutral-500 text-3xl font-medium font-["Nunito"] leading-loose'>
              Performance Adventurer
            </p>
          </div>

          {/* Middle Section - Bike Image Centered with Price Card on Right */}
          <div className='flex-1 flex items-center justify-center min-h-0 overflow-hidden mb-8 relative'>
            {/* Centered Bike Image */}
            <div className='flex items-center justify-center'>
              <div className='w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-4xl mx-auto px-4'>
                <Image
                  src={bikeImage}
                  alt='Super-73'
                  width={1000}
                  height={1000}
                  priority
                  className='w-full h-auto object-contain max-h-full'
                />
              </div>
            </div>

            {/* Left side - OffersCard */}
            <div className='hidden lg:block absolute left-0 top-0'>
              <OffersCard />
            </div>

            {/* Right side - PriceCard */}
            <div className='hidden lg:block absolute right-0 top-0'>
              <PriceCard />
            </div>

            {/* Price Card - Mobile/Tablet (shown below bike on smaller screens) */}
            <div className='lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-4'>
              <PriceCard />
            </div>
          </div>

          {/* Bottom Section - Specs Grid */}
          <div className='mt-auto'>
            <SpecsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
