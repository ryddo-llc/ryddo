import Link from 'next/link';
import React from 'react';
import { FiUser, FiSearch } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';

export default function NavIcons() {
  return (
    <div className='flex gap-6 text-xl'>
      <FiSearch />
      <Link href='/account'>
        <FiUser />
      </Link>
      <Link href='/cart'>
        <LuShoppingCart />
      </Link>
    </div>
  );
}
