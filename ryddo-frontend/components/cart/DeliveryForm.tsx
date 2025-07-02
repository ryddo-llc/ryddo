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
    </div>
  </div>
);
