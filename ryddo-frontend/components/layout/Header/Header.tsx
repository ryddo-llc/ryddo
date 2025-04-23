import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import AnnouncmentBar from './AnnouncmentBar';
import Logo from './Logo';
import NavIcons from './NavIcons';
export default function Header() {
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <AnnouncmentBar />
      <div className='flex justify-around items-center'>
        <Logo />
        <HeaderNavigation />
        <NavIcons />
      </div>
    </header>
  );
}
