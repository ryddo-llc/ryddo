import React from 'react';
import { FormInput } from './shared/FormInput';
import { FormProps } from '../../app/types/checkout';

export const ContactForm = ({ register, errors }: FormProps) => (
  <div className='mb-8'>
    <h3 className='text-lg font-medium text-gray-900 mb-4'>Contact</h3>
    <div className='space-y-4'>
      <FormInput
        type='email'
        placeholder='Email or phone number'
        register={register}
        name='email'
        error={errors.email?.message}
      />

      <label className='flex items-center'>
        <input
          type='checkbox'
          {...register('newsOffers')}
          className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
        />
        <span className='ml-2 text-sm text-gray-700'>
          Email me with news and offers
        </span>
      </label>
    </div>
  </div>
);
