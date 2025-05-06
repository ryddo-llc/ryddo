import React from 'react';
import { paymentOptions } from '../../app/types/paymentOptions';
import AccordionItem from './AccordionItem';
type AccordionProps = {
  items: paymentOptions;
};

export default function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map((item) => (
        <AccordionItem
          key={item.type}
          title={item.type}
          content={item.content}
        />
      ))}
    </div>
  );
}
