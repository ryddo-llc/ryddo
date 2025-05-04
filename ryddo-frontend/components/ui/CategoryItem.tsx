import React from 'react';
import Button from './Button';
import Image from 'next/image';
type CategoryItemProps = {
  name: string;
  image?: string;
  link: string;
};
export default function CategoryItem({ name, image, link }: CategoryItemProps) {
  const isCentered =
    name.toLowerCase() === 'accessories' ||
    name.toLowerCase() === 'ev-servicing';

  let extraContent = '';
  if (name.toLowerCase() === 'ev-servicing') {
    extraContent = 'we service all electric rides';
  }
  return (
    <article className='relative bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-transform'>
      {/* Background Image Container */}
      <div className='absolute inset-0 rounded-lg overflow-hidden'>
        <Image
          src={image || '/default-bike-image.jpg'}
          alt={name}
          fill
          className='object-cover'
          quality={100}
          priority
        />
      </div>

      {/* Grid layout for content */}
      <div
        className={`relative z-10 min-h-[300px] grid ${
          isCentered
            ? 'grid-rows-[1fr_auto_1fr] items-center'
            : 'grid-rows-1 items-start'
        }`}
      >
        <div
          className={`${
            isCentered ? 'col-start-1 row-start-2 text-center' : ''
          }`}
        >
          <h2 className='text-2xl font-semibold mb-2'>
            {name}
            <span className='w-4 h-16 justify-center text-[#F92F7B] text-6xl font-bold leading-9'>
              .
            </span>
          </h2>

          {isCentered && extraContent && (
            <p className='mb-4 text-sm font-medium text-center'>
              {extraContent}
            </p>
          )}

          <div
            className={`${
              isCentered ? 'flex justify-center' : 'absolute bottom-0 left-0'
            }`}
          >
            <Button
              text={extraContent ? 'Book Now' : 'Shop'}
              link={link}
              width='w-20'
              height='h-11'
            />
          </div>
        </div>
      </div>
    </article>
  );
}
