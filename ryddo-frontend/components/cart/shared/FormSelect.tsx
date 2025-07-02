import React from 'react';
import { ErrorMessage } from './ErrorMessage';
import { FormSelectProps } from '../../../app/types/checkout';

const selectId = `select-${name}`;
export const FormSelect = ({
  label,
  register,
  name,
  error,
  children,
  ...props
}: FormSelectProps) => (
  <div>
    {label && (
      <label
        htmlFor={selectId}
        className='block text-sm font-medium text-gray-700 mb-1'
      >
        {label}
      </label>
    )}
    <select
      id={selectId}
      {...register(name)}
      aria-describedby={error ? `${name}-error` : undefined}
      aria-invalid={!!error}
      className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      {...props}
    >
      {children}
    </select>
    <ErrorMessage message={error} id={`${name}-error`} />
  </div>
);
