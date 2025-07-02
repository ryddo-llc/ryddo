import React from 'react';

export const ExpressCheckout = () => (
  <div className='mb-8'>
    <h2 className='text-lg font-medium text-gray-900 mb-4'>Express checkout</h2>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4'>
      <button
        type='button'
        className='bg-[#5A31F4] text-white px-4 py-3 rounded-md font-medium hover:bg-[#4A28E4] transition-colors flex items-center justify-center'
      >
        <span className='text-white font-bold'>Shop</span>
        <span className='ml-1 text-white font-bold'>Pay</span>
      </button>

      <button
        type='button'
        className='bg-black text-white px-4 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center'
      >
        <span className='text-white'>G Pay</span>
      </button>

      <button
        type='button'
        className='bg-[#FFC439] text-black px-4 py-3 rounded-md font-medium hover:bg-[#FFB800] transition-colors flex items-center justify-center'
      >
        <span className='font-bold'>PayPal</span>
      </button>
    </div>
    <div className='text-center text-gray-500 text-sm'>OR</div>
  </div>
);
