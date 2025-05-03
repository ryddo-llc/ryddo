import React, { useState } from 'react';
import { paymentOptions } from '../../app/types/paymentOptions';
import AccordianItem from './AccordianItem';
type AccordianProps = {
  items: paymentOptions;
};

export default function Accordian({ items }: AccordianProps) {
  return (
    <div>
      {items.map((item) => (
        <AccordianItem
          key={item.type}
          title={item.type}
          content={item.content}
        />
      ))}
    </div>
  );
}
