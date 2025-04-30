import React from 'react';
import Image from 'next/image';
import background from '../../public/images/backgrounds/herobackground.jpeg';
import Button from '../ui/Button';
export default function HeroSection() {
  return (
    <section
      aria-labelledby='hero-heading'
      className='w-full h-[500px] md:h-[600px] lg:h-[650px] relative flex items-center'
    >
      {/* Background Image Container */}
      <div className='absolute inset-0 w-full h-full opacity-30'>
        <Image
          src={background}
          alt='Person riding an electric bicycle on a scenic coastal road'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center 60%',
          }}
          priority
        />
      </div>

      {/* Content container */}
      <div className='container mx-auto px-4 relative z-10 opacity-90'>
        <div className='flex justify-end'>
          {/* Premium e-rides box */}
          <div className='w-full max-w-sm md:max-w-md bg-white/95 rounded-xl shadow-lg p-6 md:p-8'>
            <p className='text-[#757575] text-base md:text-sm font-semibold'>
              starting at $1,499
            </p>

            <div className="font-['Nunito']">
              <h1
                id='hero-heading'
                className='text-[#F92F7B] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight block'
              >
                Premium
                <span className='text-zinc-800 inline-block'>e-rides</span>
                <span className='text-[#F92F7B] md:ml-1 inline-block'>.</span>
              </h1>
            </div>

            <p className='mt-1 md:mt-1 text-[#757575] text-base md:text-sm font-semibold'>
              Only the very best electric rides. PERIOD
            </p>

            <div className='mt-6 md:mt-7'>
              <Button
                text='Shop Now'
                aria-label='Shop for premium electric bikes and scooters'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
