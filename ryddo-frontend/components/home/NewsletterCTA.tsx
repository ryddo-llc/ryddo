import React from 'react';
import NewsLetterForm from '../ui/forms/NewsLetterForm';
import background from '../../public/images/backgrounds/newsletter-background.svg';
import formBackground from '../../public/images/backgrounds/newsletterform.png';
import Image from 'next/image';

export default function NewsletterCTA() {
  return (
    <section className='w-full min-h-screen md:min-h-[50vh] overflow-hidden relative flex items-center'>
      {/* Background Image Container */}
      <div className='absolute inset-0 w-full h-full aspect-video'>
        <Image
          src={background}
          alt='Palm Trees With Mountains background'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
          priority
        />
      </div>
      {/* Content Container */}
      <div className='w-full max-w-3xl relative rounded-lg mx-auto overflow-hidden shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.30)]'>
        {/* Background image - note the relative positioning */}
        <Image
          src={formBackground}
          alt='Palm Trees With Mountains background'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
          priority
        />

        {/* Content overlay - positioned absolutely over the image */}
        <div className='relative inset-0 z-10 flex flex-col items-center justify-center p-4 md:p-8'>
          <div className='text-center mb-6'>
            <h2 className='text-3xl md:text-5xl font-extrabold leading-[48px] text-gray-800 mb-2 font-["Nunito"]'>
              Let's stay in touch
              <span
                className='text-[#F92F7B] w-5 h-24 text-7xl
font-bold'
              >
                .
              </span>
            </h2>
            <p className='h-5 text-center justify-center text-neutral-500 text-base font-semibold leading-loose '>
              Sign up for our newsletter and receive special offers and
              discounts.
            </p>
          </div>
          <NewsLetterForm />
        </div>
      </div>
    </section>
  );
}
