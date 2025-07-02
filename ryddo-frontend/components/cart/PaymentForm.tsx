import React from 'react';
import { CreditCardFields } from './CreditCardField';
import { ErrorMessage } from './shared/ErrorMessage';
import { PaymentFormProps } from '../../app/types/checkout';

export const PaymentForm = ({ register, watch, errors }: PaymentFormProps) => {
  const paymentMethod = watch('paymentMethod');

  return (
    <div className='mb-8'>
      <h3 className='text-lg font-medium text-gray-900 mb-2'>Payment</h3>
      <p className='text-sm text-gray-600 mb-4'>
        All transactions are secure and encrypted
      </p>

      <fieldset className='space-y-4'>
        <legend className='sr-only'>Payment method selection</legend>
        {/* Credit Card Option */}
        <div className='border border-gray-300 rounded-md'>
          <label
            htmlFor='payment-credit'
            className='flex items-center p-4 cursor-pointer'
            id='payment-credit'
          >
            <input
              type='radio'
              value='credit'
              {...register('paymentMethod')}
              className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300'
            />
            <span className='ml-3 text-sm font-medium text-gray-900'>
              Credit or debit card
            </span>
            <div className='ml-auto flex space-x-2'>
              <div className='w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold'>
                VISA
              </div>
              <div className='w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold'>
                MC
              </div>
              <div className='w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold'>
                AMEX
              </div>
            </div>
          </label>

          {paymentMethod === 'credit' && (
            <CreditCardFields register={register} errors={errors} />
          )}
        </div>

        {/* PayPal Option */}
        <div className='border border-gray-300 rounded-md'>
          <label
            htmlFor='payment-paypal'
            className='flex items-center p-4 cursor-pointer'
            id='payment-paypal'
          >
            <input
              type='radio'
              value='paypal'
              {...register('paymentMethod')}
              className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300'
            />
            <span className='ml-3 text-sm font-medium text-gray-900'>
              PayPal
            </span>
            <div className='ml-auto'>
              <div className='text-blue-600 font-bold'>PayPal</div>
            </div>
          </label>
        </div>
      </fieldset>
      <ErrorMessage
        message={errors.paymentMethod?.message}
        id={`paymentMethod-error`}
      />
    </div>
  );
};
