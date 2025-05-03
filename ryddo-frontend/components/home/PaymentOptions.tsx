import React from 'react';
import Image from 'next/image';
import formBackground from '../../public/images/backgrounds/payment-options.jpg';
import PaymentOptionsCard from '../ui/PaymentOptionsCard';

export default function PaymentOptions() {
  return (
    <section className='w-full h-[45vh] md:h-[50vh] lg:h-[60vh] relative flex items-center '>
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={formBackground}
          alt='Palm Trees With Mountains background'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
          priority
          quality={100}
        />
      </div>

      <div className='relative w-full h-full flex items-center justify-start'>
        <div className='ml-8 md:ml-12 lg:ml-16'>
          <PaymentOptionsCard />
        </div>
      </div>
    </section>
  );
}
