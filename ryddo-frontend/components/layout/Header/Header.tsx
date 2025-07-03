import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import AnnouncmentBar from './AnnouncmentBar';
import Logo from './Logo';
import NavIcons from './NavIcons';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className='bg-white shadow-md top-0 z-50'>
      <AnnouncmentBar />
      <div className='hidden md:flex justify-around items-center'>
        <Logo />
        <HeaderNavigation />
        <NavIcons />
      </div>
      <div className='flex justify-between items-center px-4 md:hidden'>
        <Logo />
        <MobileMenu />
      </div>
    </header>
  );
}
