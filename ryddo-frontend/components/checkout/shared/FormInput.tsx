import React from 'react';
import { ErrorMessage } from './ErrorMessage';
import { FormInputProps } from '../../../app/types/checkout';

export const FormInput = ({
  placeholder,
  type = 'text',
  register,
  name,
  error,
  className = '',
  ...props
}: FormInputProps) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
        error ? 'border-red-500' : 'border-gray-300'
      } ${className}`}
      {...props}
    />
    <ErrorMessage message={error} />
  </div>
);
