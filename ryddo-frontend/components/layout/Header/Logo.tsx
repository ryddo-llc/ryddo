import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/LOGO.svg';
export default function LogoComponent() {
  return (
    <>
      <Image
        src={logo} // Path relative to the public directory
        alt='Ryddo Logo'
        width={130} // Required width in pixels
        height={46.53} // Required height in pixels
        className='py-1.5'
      />
    </>
  );
}
