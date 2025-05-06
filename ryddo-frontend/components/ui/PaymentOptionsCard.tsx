import React from 'react';
import paymentOptions from '../../lib/utils/paymentOptions';
import Accordion from './Accordion';
import Image from 'next/image';
import formBackground from '../../public/images/backgrounds/newsletterform.png';
export default function PaymentOptionsCard() {
  return (
    <article className='w-full max-w-lg max-h-lg'>
      <div className='w-full max-w-3xl relative rounded-lg mx-auto overflow-hidden shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.30)] '>
        {/* Background image - note the relative positioning */}
        <Image
          src={formBackground}
          alt='Palm Trees With Mountains background'
          fill
          className='opacity-60 object-cover'
          style={{
            objectPosition: 'center 40%',
          }}
          priority
        />

        <div className='relative p-8 flex items-center flex-col '>
          <h2 className='text-3xl font-bold text-gray-800'>
            Payment Options{' '}
            <span className='w-4 h-16 justify-center text-[#F92F7B] text-6xl font-bold leading-9'>
              .
            </span>
          </h2>
          <p className='text-sm text-gray-600 mt-1'>
            we have great finance options
          </p>
          <p className='text-sm text-gray-600 mb-4'>
            as well as cash discounts
          </p>

          <Accordion items={paymentOptions} />
        </div>
      </div>
    </article>
  );
}
