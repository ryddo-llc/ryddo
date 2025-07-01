import React from 'react';
import { OrderItemProps } from '../../app/types/checkout';

export const OrderItem = ({
  name,
  description,
  price,
  quantity,
  image,
}: OrderItemProps) => (
  <div className='flex items-center space-x-4'>
    <div className='relative'>
      <div className='w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border'>
        <span className='text-2xl'>{image}</span>
      </div>
      <div className='absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
        {quantity}
      </div>
    </div>
    <div className='flex-1'>
      <h4 className='font-medium text-gray-900'>{name}</h4>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
    <div className='text-right'>
      <p className='font-medium text-gray-900'>${price}</p>
    </div>
  </div>
);
