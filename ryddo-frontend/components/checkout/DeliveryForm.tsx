import React from 'react';
import { FormInput } from './shared/FormInput';
import { FormSelect } from './shared/FormSelect';
import { FormProps } from '../../app/types/checkout';

export const DeliveryForm = ({ register, errors }: FormProps) => (
  <div className='mb-8'>
    <h3 className='text-lg font-medium text-gray-900 mb-4'>Delivery</h3>
    <div className='space-y-4'>
      <FormSelect
        label='Country/region'
        register={register}
        name='country'
        error={errors.country?.message}
      >
        <option value=''>Select country</option>
        <option value='Canada'>Canada</option>
        <option value='United States'>United States</option>
        <option value='Mexico'>Mexico</option>
      </FormSelect>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <FormInput
          placeholder='First name (optional)'
          register={register}
          name='firstName'
          error={errors.firstName?.message}
        />
        <FormInput
          placeholder='Last name'
          register={register}
          name='lastName'
          error={errors.lastName?.message}
        />
      </div>

      <FormInput
        placeholder='Address'
        register={register}
        name='address'
        error={errors.address?.message}
      />

      <FormInput
        placeholder='Apartment, suite, etc. (optional)'
        register={register}
        name='apartment'
        error={errors.apartment?.message}
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <FormInput
          placeholder='City'
          register={register}
          name='city'
          error={errors.city?.message}
        />
        <FormSelect
          label='Province'
          register={register}
          name='province'
          error={errors.province?.message}
        >
          <option value=''>Select province</option>
          <option value='Ontario'>Ontario</option>
          <option value='Quebec'>Quebec</option>
          <option value='British Columbia'>British Columbia</option>
          <option value='Alberta'>Alberta</option>
        </FormSelect>
      </div>
    </div>
  </div>
);
