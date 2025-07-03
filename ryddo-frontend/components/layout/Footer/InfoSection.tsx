import React from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function InfoSection() {
  return (
    <div className="text-center md:text-left">
      <p className='text-base md:text-sm font-extrabold md:font-semibold mb-2'>
        Cleaning up the air, one EV at a time
        <span className='text-pink-500'>.</span>
      </p>

      <p className='text-sm text-gray-700 mb-1'>
        Turning our hobbies and passions into a business. We hope you&#39;ll come
        along for the ride.
      </p>

      <div>
        <Link href='/learn-more' className='text-pink-500 font-bold my-3 flex items-center justify-center md:justify-start gap-1'>
          Learn More <FiArrowRight />
        </Link>
      </div>

      <div className='flex justify-center md:justify-start space-x-2 mt-3'>
        <FaCcMastercard className='h-10 w-auto text-[#333333]' />
        <FaCcVisa className='h-10 w-auto text-[#333333]' />
      </div>
    </div>
  );
}
