import React from 'react';

export default function ProductsFilterDropdown() {
  const filterOptions = ['Most Popular', 'New', 'Bestseller', 'On Sale'];
  return (
    <div className='relative w-40 h-5 overflow-hidden text-start rounded-[3px]'>
      <select
        name='search'
        id='search'
        className='w-full text-zinc-800 text-sm font-medium appearance-none pl-1 pr-6 bg-gray-100 rounded-[3px]'
      >
        {filterOptions.map((option, index) => (
          <option
            className='text-zinc-800 text-xs font-medium'
            key={index}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center'>
        <svg
          className='h-4 w-4 text-gray-400'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
}
