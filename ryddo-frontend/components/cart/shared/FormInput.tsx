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
  autoComplete,
  inputMode,
  pattern,
  title,
  maxLength,
  ...props
}: FormInputProps & {
  autoComplete?: string;
  inputMode?: 'text' | 'numeric' | 'tel' | 'email';
  pattern?: string;
  title?: string;
  maxLength?: number;
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      autoComplete={autoComplete}
      inputMode={inputMode}
      pattern={pattern}
      title={title}
      maxLength={maxLength}
      className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
        error ? 'border-red-500' : 'border-gray-300'
      } ${className}`}
      {...props}
    />
    <ErrorMessage message={error} />
  </div>
);
