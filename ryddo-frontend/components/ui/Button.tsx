import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  text?: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  disabled?: boolean;
};

const Button = ({
  text = 'Shop Now',
  link = '/products',
  onClick,
  className = '',
  width = 'w-28',
  height = 'h-11',
  fontSize = 'text-xs',
  disabled = false,
  ...props
}: ButtonProps) => {
  // Fixed styles that won't change
  const bgColor = 'bg-[#F92F7B]';
  const textColor = 'text-white';
  const fontWeight = 'font-bold';
  const rounded = 'rounded-full';
  const shadow = 'shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.13)]';
  return (
    <Link
      href={link}
      onClick={onClick}
      className={`${width} ${height} ${bgColor} ${rounded} ${shadow} ${textColor} ${fontSize} ${fontWeight} font-['Inter'] tracking-wide flex items-center justify-center ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      {...props}
    >
      {text}
    </Link>
  );
};

export default Button;
