import React from 'react';
import { ButtonHTMLAttributes } from 'react';
type ButtonProps = {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  text = 'Shop Now',
  onClick,
  className = '',
  width = 'w-28',
  height = 'h-11',
  fontSize = 'text-sm',
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
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${width} ${height} ${bgColor} ${rounded} ${shadow} flex items-center justify-center ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      {...props}
    >
      <span
        className={`${textColor} ${fontSize} ${fontWeight} font-['Inter'] tracking-wide`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
