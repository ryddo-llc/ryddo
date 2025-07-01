// components/checkout/OrderSummary.tsx
import React from 'react';
import { OrderItem } from './OrderItem';
import { OrderItemProps, OrderSummaryProps } from '../../app/types/checkout';

export const OrderSummary = ({ register }: OrderSummaryProps) => {
  const orderItems: OrderItemProps[] = [
    {
      name: 'Super73-RX',
      description: 'E-bike',
      price: '3,695.00',
      quantity: 1,
      image: '🚲',
    },
    {
      name: 'POC Tectal Helmet',
      description: 'Grey',
      price: '180.00',
      quantity: 1,
      image: '⛑️',
    },
  ];

  return (
    <div className='h-full p-6 lg:p-8'>
      {/* Order Items */}
      <div className='space-y-4 mb-6'>
        {orderItems.map((item, index) => (
          <OrderItem key={index} {...item} />
        ))}
      </div>

      {/* Discount Code */}
      <div className='mb-6'>
        <div className='flex space-x-2'>
          <input
            type='text'
            placeholder='Discount code'
            {...register('discountCode')}
            className='flex-1 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
          />
          <button
            type='button'
            className='px-6 py-3 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors'
          >
            Apply
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className='space-y-3 mb-6'>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-600'>Subtotal</span>
          <span className='font-medium text-gray-900'>$3,875.00</span>
        </div>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-600'>Shipping</span>
          <span className='text-gray-600'>Enter shipping address</span>
        </div>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-600 flex items-center'>
            Estimated taxes
            <svg
              className='ml-1 h-4 w-4 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </span>
          <span className='font-medium text-gray-900'>$5.00</span>
        </div>
      </div>

      {/* Total */}
      <div className='border-t border-gray-300 pt-4'>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-semibold text-gray-900'>Total</span>
          <div className='text-right'>
            <div className='text-2xl font-bold text-gray-900'>$3,880.00</div>
            <div className='text-sm text-gray-600'>
              Including $5.00 in taxes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
