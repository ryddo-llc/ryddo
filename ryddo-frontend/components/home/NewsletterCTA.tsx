import React from 'react';
import NewsLetterForm from '../ui/forms/NewsLetterForm';
import background from '../../public/images/backgrounds/newsletter-background.svg';
import Image from 'next/image';

export default function NewsletterCTA() {
  return (
    <div className='w-full h-[530px] overflow-hidden relative'>
      {/* Background Image Container */}
      <div className='absolute inset-0 w-full h-full'>
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
      <div className='relative z-10 flex items-center justify-center w-full h-full'>
        <div className='max-w-xl w-full px-4'>
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
}
