import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import AnnouncmentBar from './AnnouncmentBar';
export default function Header() {
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <AnnouncmentBar />
      Header
      <HeaderNavigation />
    </header>
  );
}
