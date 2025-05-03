import React from 'react';
import paymentOptions from '../../lib/utils/paymentOptions';
import Accordian from './Accordian';
export default function PaymentOptionsCard() {
  return (
    <article>
      <h2>
        Payment Options <span>.</span>
      </h2>
      <p>we have great finance options</p>
      <p>as well as cash discounts</p>
      <Accordian items={paymentOptions} />
    </article>
  );
}
