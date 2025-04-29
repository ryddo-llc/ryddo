import React from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import Link from 'next/link';

export default function InfoSection() {
  return (
    <div>
      <p className='text-sm font-medium mb-2'>
        Cleaning up the air, one EV at a time.
      </p>

      <p className='text-sm text-gray-700 mb-3'>
        Turning our hobbies and passions into a business. We hope you'll come
        along for the ride.{' '}
        <Link href='/learn-more' className='text-pink-500 font-medium'>
          Learn More
        </Link>
      </p>

      <div className='flex space-x-2 mt-3'>
        <FaCcMastercard className='h-10 w-auto text-[#333333]' />
        <FaCcVisa className='h-10 w-auto text-[#333333]' />
      </div>
    </div>
  );
}
