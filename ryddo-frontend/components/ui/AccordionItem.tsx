'use client';
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
}
export default function AccordianItem({ content, title }: AccordionItemProps) {
  const [isOpen, setOpen] = useState(false);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={`shadow-sm  mb-3 ${
        isOpen ? 'bg-sky-100' : 'bg-gray-200'
      } rounded-[10px]`}
    >
      <button
        onClick={onToggle}
        className='w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 hover:rounded-xl transition-colors leading-normal text-zinc-800
text-md
font-bold '
      >
        <span>{title}</span>

        <span
          className={`h-5 w-5 transition-transform duration-200 text-[#F92F7B] ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ^
        </span>
      </button>

      <div
        className={`overflow-hidden relative rounded-[10px] bg-sky-100 transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0 '
        }`}
      >
        <div className='p-4 border-t border-gray-200 relative bg-sky-100'>
          {content}
        </div>
      </div>
    </div>
  );
}
