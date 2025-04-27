import React from 'react';
import PartnersContactBar from './PartnersContactBar';
import InfoSection from './InfoSection';
import ShopLinks from './ShopLinks';
import ExploreLinks from './ExploreLinks';
import ContactSection from './ContactSection';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer className='bg-[#FFFFFF] flex flex-col justify-center items-center text-black text-xs'>
      <div className='flex gap-40 pl-32 pr-32'>
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
