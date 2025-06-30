import React from 'react';
import { getCldImageUrl } from 'next-cloudinary';
import Image from 'next/image';

interface AddonProps {
  name?: string;
}
export default function Addons({ name = 'Super73-RX' }: AddonProps) {
  const addOns = [
    { id: 1, name: 'waterbottle', type: 'accessories' },
    { id: 2, name: 'glove-1', type: 'gear' },
    { id: 3, name: 'grip', type: 'accessories' },
    { id: 4, name: 'helmet', type: 'gear' },
    { id: 5, name: 'bell', type: 'accessories' },
    { id: 6, name: 'glasses-1', type: 'gear' },
  ];

  return (
    <section className='py-16 px-4 bg-gradient-to-br bg-white'>
      <div className='max-w-6xl mx-auto text-center'>
        {/* Title */}
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-12'>
          Add-Ons for your
          <br />
          <span className='text-[#F92F7B]'>new {name}.</span>
        </h2>

        {/* Grid of Add-Ons with Background Text */}
        <div className='relative'>
          {/* Background Super73 Text */}
          <div className='absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden'>
            <span className='text-gray-300 uppercase leading-loose tracking-widest font-black text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] whitespace-nowrap select-none opacity-30'>
              Super73
            </span>
          </div>

          {/* Add-Ons Grid */}
          <div className='relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-16'>
            {addOns.map((addon) => {
              const imageUrl = getCldImageUrl({
                src: addon.name,
              });

              return (
                <div key={addon.id} className='group cursor-pointer'>
                  <Image
                    src={imageUrl}
                    alt={`${addon.name} addon`}
                    width={500}
                    height={500}
                    className='rounded-2xl p-6 md:p-8  hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
