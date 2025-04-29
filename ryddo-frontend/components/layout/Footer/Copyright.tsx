import React from 'react';

export default function Copyright() {
  return (
    <div className='flex justify-center items-center'>
      <span className='text-xs'>
        Copyright 2019 - {new Date().getFullYear()} ©
      </span>
      <span className='font-semibold text-lg'>ryddo</span>
    </div>
  );
}
