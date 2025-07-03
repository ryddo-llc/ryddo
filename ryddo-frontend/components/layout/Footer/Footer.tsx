import React from 'react';
import InfoSection from './InfoSection';
import ShopLinks from './ShopLinks';
import ExploreLinks from './ExploreLinks';
import ContactSection from './ContactSection';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer
      className='bg-white w-full text-black text-xs'
      role='contentinfo'
      aria-label='Site Footer'
    >
      <nav 
        className='max-w-7xl mx-auto px-6 py-8 border-b border-gray-300'
        aria-label='Footer navigation'
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-x-20 pb-12">
          <InfoSection />
          <ShopLinks />
          <ExploreLinks />
          <ContactSection />
        </div>
      </nav>

      <div className='max-w-6xl mx-auto px-4 py-4'>
        <Copyright />
      </div>
    </footer>
  );
}
