import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import AnnouncmentBar from './AnnouncmentBar';
import Logo from './Logo';
export default function Header() {
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <AnnouncmentBar />
      <div className='flex justify-around items-center'>
        <Logo />
        <HeaderNavigation />
        <div>search Account Cart</div>
      </div>
    </header>
  );
}
