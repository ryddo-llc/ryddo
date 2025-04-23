import React from 'react';
import FooterNavigation from './FooterNavigation';
import SocialLinks from './SocialLinks';
import PartnersContactBar from './PartnersContactBar';
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white'>
      Footer
      <FooterNavigation />
      <SocialLinks />
      <PartnersContactBar />
    </footer>
  );
}
