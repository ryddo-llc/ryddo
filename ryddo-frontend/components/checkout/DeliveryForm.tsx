import React from 'react';
import { FormInput } from './shared/FormInput';
import { FormSelect } from './shared/FormSelect';
import { FormProps } from '../../app/types/checkout';
import { US_STATES } from '../../lib/constants/states';

export const DeliveryForm = ({ register, errors }: FormProps) => (
  <div className='mb-8'>
    <h3 className='text-lg font-medium text-gray-900 mb-4'>Shipping Address</h3>
    <div className='space-y-4'>
      {/* Name Fields */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <FormInput
          placeholder='First name (optional)'
          register={register}
          name='firstName'
          error={errors.firstName?.message}
          autoComplete='given-name'
        />
        <FormInput
          placeholder='Last name'
          register={register}
          name='lastName'
          error={errors.lastName?.message}
          autoComplete='family-name'
        />
      </div>

      {/* Address Fields */}
      <FormInput
        placeholder='Street address'
        register={register}
        name='address'
        error={errors.address?.message}
        autoComplete='street-address'
      />

      <FormInput
        placeholder='Apartment, suite, etc. (optional)'
        register={register}
        name='apartment'
        error={errors.apartment?.message}
        autoComplete='address-line2'
      />

      {/* City, State, ZIP Code Row */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <FormInput
          placeholder='City'
          register={register}
          name='city'
          error={errors.city?.message}
          autoComplete='address-level2'
        />

        <FormSelect
          register={register}
          name='state'
          error={errors.state?.message}
        >
          <option value=''>State</option>
          {US_STATES.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </FormSelect>

        <FormInput
          placeholder='ZIP code'
          register={register}
          name='zipCode'
          error={errors.zipCode?.message}
          autoComplete='postal-code'
          inputMode='numeric'
          pattern='[0-9]{5}(-[0-9]{4})?'
          title='ZIP code must be 5 digits or 5+4 format (12345 or 12345-6789)'
          maxLength={10}
        />
      </div>

      {/* Phone Number */}
      <FormInput
        placeholder='Phone number (optional)'
        type='tel'
        register={register}
        name='phone'
        error={errors.phone?.message}
        autoComplete='tel'
      />

      {/* Helper Text */}
      <div className='text-sm text-gray-500 bg-gray-50 p-3 rounded-md'>
        <div className='flex items-start space-x-2'>
          <svg
            className='w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            />
          </svg>
          <div className='space-y-1 text-xs'>
            <p>• We only ship within the United States</p>
            <p>• This address will be used for shipping and tax calculation</p>
            <p>• ZIP code format: 12345 or 12345-6789</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
