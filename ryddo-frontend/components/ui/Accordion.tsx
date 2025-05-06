import React from 'react';
import { paymentOptions } from '../../app/types/paymentOptions';
import AccordianItem from './AccordionItem';
type AccordionProps = {
  items: paymentOptions;
};

export default function Accordian({ items }: AccordionProps) {
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
