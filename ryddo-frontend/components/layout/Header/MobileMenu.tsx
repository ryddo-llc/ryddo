'use client';
import React, { useState } from 'react';
import { BsBackpack2 } from 'react-icons/bs';
import { FaBicycle } from 'react-icons/fa';
import { FiMenu, FiX, FiHome, FiSearch, FiUser } from 'react-icons/fi';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { IoBagAddOutline } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { PiScooterBold } from 'react-icons/pi';

import Link from 'next/link';

const navLinks = [
  { name: 'home', path: '/', icon: <FiHome /> },
  { name: 'e-bikes', path: '/products/e-bikes', icon: <FaBicycle /> },
  { name: 'e-scooters', path: '/products/e-scooters', icon: <PiScooterBold /> },
  { name: 'gear', path: '/products/gear', icon: <BsBackpack2 /> },
  { name: 'accessories', path: '/products/accessories', icon: <IoBagAddOutline /> },
  { name: 'service', path: '/products/service', icon: <HiOutlineWrenchScrewdriver /> },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className='text-3xl p-2 text-pink-500'
        onClick={() => setOpen(true)}
        aria-label='Open menu'
      >
        <FiMenu />
      </button>

      {open && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-row-reverse'>
          <div className='bg-white w-4/5 max-w-xs h-full p-6 shadow-lg relative flex flex-col'>
            <button
              className='absolute top-4 right-4 text-2xl'
              onClick={() => setOpen(false)}
              aria-label='Close menu'
            >
              <FiX />
            </button>
            <div className='flex justify-around text-2xl pt-8 pb-4 border-b border-gray-200'>
              <Link href='/search' aria-label='Search' onClick={() => setOpen(false)}>
                <FiSearch />
              </Link>
              <Link href='/account' aria-label='Account' onClick={() => setOpen(false)}>
                <FiUser />
              </Link>
              <Link href='/cart' aria-label='Cart' onClick={() => setOpen(false)}>
                <LuShoppingCart />
              </Link>
            </div>
            <nav className='mt-6 flex flex-col gap-6'>
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.path}
                  className='flex items-center gap-4 text-lg font-semibold text-gray-900 hover:text-pink-500 transition'
                  onClick={() => setOpen(false)}
                >
                  <span className='text-2xl'>{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className='flex-1' onClick={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
} 
