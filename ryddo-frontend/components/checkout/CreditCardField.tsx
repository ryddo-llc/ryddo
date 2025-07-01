// components/checkout/CreditCardFields.tsx
import React from 'react';
import { FormInput } from './shared/FormInput';
import { FormProps } from '../../app/types/checkout';

export const CreditCardFields = ({ register, errors }: FormProps) => (
  <div className='px-4 pb-4 space-y-4'>
    <div className='relative'>
      <FormInput
        placeholder='Card number'
        register={register}
        name='cardNumber'
        error={errors.cardNumber?.message}
        className='pr-10'
      />
      <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
        <svg
          className='h-5 w-5 text-gray-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
          />
        </svg>
      </div>
    </div>

    <div className='grid grid-cols-2 gap-4'>
      <FormInput
        placeholder='Expiration date (MM/YY)'
        register={register}
        name='expirationDate'
        error={errors.expirationDate?.message}
      />
      <div className='relative'>
        <FormInput
          placeholder='Security code'
          register={register}
          name='securityCode'
          error={errors.securityCode?.message}
          className='pr-10'
        />
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
          <svg
            className='h-5 w-5 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
      </div>
    </div>

    <FormInput
      placeholder='Name on card'
      register={register}
      name='nameOnCard'
      error={errors.nameOnCard?.message}
    />

    <label className='flex items-center'>
      <input
        type='checkbox'
        {...register('useShippingAddress')}
        className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
      />
      <span className='ml-2 text-sm text-gray-700'>
        Use shipping address as billing address
      </span>
    </label>
  </div>
);
