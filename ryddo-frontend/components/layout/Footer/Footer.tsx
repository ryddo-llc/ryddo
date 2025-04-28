import React from 'react';
import PartnersContactBar from './PartnersContactBar';
import InfoSection from './InfoSection';
import ShopLinks from './ShopLinks';
import ExploreLinks from './ExploreLinks';
import ContactSection from './ContactSection';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <>
      <footer
        className='bg-[#FFFFFF] flex flex-col justify-center items-center text-black text-xs'
        role='contentinfo'
        aria-label='Site Footer'
      >
        <nav
          className='flex gap-40 pl-32 pr-32 border-b border-b-gray-300 pb-12'
          aria-label='Footer Navigation'
        >
          <InfoSection />
          <ShopLinks />
          <ExploreLinks />
          <ContactSection />
        </nav>
        <div>
          <Copyright />
        </div>
      </footer>
    </>
  );
}
