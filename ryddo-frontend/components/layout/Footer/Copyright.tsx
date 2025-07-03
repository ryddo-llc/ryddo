'use client';
import React from 'react';

export default function Copyright() {
  return (
    <div className='flex justify-center items-center'>
      <span className='text-xs'>
        Copyright 2019 - {new Date().getFullYear()} ©&nbsp;
      </span>
      <span className='font-semibold text-lg'>ryddo</span>
      <span className='font-extrabold text-xl text-pink-500'>.</span>
    </div>
  );
}
