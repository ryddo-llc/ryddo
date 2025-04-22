import React from 'react';
import FooterNavigation from './FooterNavigation';
import SocialLinks from './SocialLinks';
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white'>
      Footer
      <FooterNavigation />
      <SocialLinks />
    </footer>
  );
}
