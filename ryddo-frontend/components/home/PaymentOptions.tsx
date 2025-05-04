'use client';
import React from 'react';
import Image from 'next/image';
import formBackground from '../../public/images/backgrounds/payment-options.jpg';
import PaymentOptionsCard from '../ui/PaymentOptionsCard';
import { Parallax } from 'react-scroll-parallax';

export default function PaymentOptions() {
  return (
    <section
      aria-labelledby='payment-options'
      className='w-full h-[45vh] md:h-[50vh] lg:h-[62vh] relative flex items-center overflow-hidden'
    >
      <Parallax speed={-20} className='absolute inset-0 w-full h-full'>
        <div className='absolute inset-0 w-full h-[120%] top-[-10%]'>
          <Image
            src={formBackground}
            alt='E-Bike with People Riding in the Background'
            fill
            className='object-cover object-center'
            priority
            quality={100}
          />
        </div>
      </Parallax>

      <div className='relative w-full h-full flex items-center justify-start'>
        <div className='ml-12 md:ml-20 lg:ml-40'>
          <PaymentOptionsCard />
        </div>
      </div>
    </section>
  );
}
