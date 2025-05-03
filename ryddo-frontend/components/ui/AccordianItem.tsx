import React, { ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle?: () => void;
}
export default function AccordianItem({
  onToggle,
  isOpen = false,
  content,
  title,
}: AccordionItemProps) {
  return (
    <div className='border border-gray-200 rounded-lg mb-2'>
      <button
        onClick={onToggle}
        className='w-full p-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 transition-colors'
      >
        <span>{title}</span>

        <span
          className={`h-5 w-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ^
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className='p-4 border-t border-gray-200 bg-gray-50'>{content}</div>
      </div>
    </div>
  );
}
