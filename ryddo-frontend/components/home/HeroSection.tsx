import React from 'react';
import Image from 'next/image';
import background from '../../public/images/backgrounds/herobackground.jpeg';
export default function HeroSection() {
  return (
    <div className='w-full min-h-screen md:min-h-[50vh] overflow-hidden relative flex items-center'>
      {/* Background Image Container */}
      <div className='absolute inset-0 w-full h-full aspect-video opacity-30'>
        <Image
          src={background}
          alt='A Person Riding a Bicycle with the Ocean in the Background'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center 60%',
          }}
          priority
        />
      </div>

      <div className=' h-96 relative opacity-90 bg-white/95 rounded-[10px] shadow-[0px_10px_17px_0px_rgba(0,0,0,0.11)]'>
        <h4>starting at $1,499</h4>
        <h2>Premium e-rides .</h2>
        <h4>Only the very best electric rides. PERIOD</h4>
      </div>
    </div>
  );
}
