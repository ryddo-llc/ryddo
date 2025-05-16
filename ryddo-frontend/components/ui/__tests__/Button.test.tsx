import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';
import '@testing-library/jest-dom';

// Mock Next.js Link component correctly with TypeScript
jest.mock('next/link', () => {
  // Define the return type for the mock function
  const MockLink: React.FC<{
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
    className?: string;
  }> = ({ children, href, ...rest }) => {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  };

  return MockLink;
});

test('next link integration works correctly', () => {
  render(<Button link='/test-next-link' />);
  const button = screen.getByText('Shop Now');
  expect(button).toHaveAttribute('href', '/test-next-link');
});

describe('Button Component', () => {
  test('renders with defualt props', () => {
    render(<Button />);

    const button = screen.getByText('Shop Now');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/products');
  });

  test('renders with custom text and link', () => {
    render(<Button text='Click Me' link='/custom-page' />);

    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/custom-page');
  });
});
