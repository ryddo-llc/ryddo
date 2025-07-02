import React from 'react';

interface ErrorMessageProps {
  message?: string;
  id: string;
}

export const ErrorMessage = ({ message, id }: ErrorMessageProps) => {
  if (!message) return null;
  return (
    <p className='text-red-500 text-sm mt-1' id={id}>
      {message}
    </p>
  );
};
