import React from 'react';
import PartnersContactBar from './PartnersContactBar';
import InfoSection from './InfoSection';
import ShopLinks from './ShopLinks';
import ExploreLinks from './ExploreLinks';
import ContactSection from './ContactSection';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white text-xs sticky'>
      <div>
        <InfoSection />
        <ShopLinks />
        <ExploreLinks />
        <ContactSection />
      </div>
      <div>
        <Copyright />
      </div>
    </footer>
  );
}
