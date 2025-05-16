import { render, screen } from '@testing-library/react';
import NewsLetterForm from '../NewsLetterForm';

describe('NewsLetterForm Component', () => {
  test('renders the login form', () => {
    render(<NewsLetterForm />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const nameInput = screen.getByPlaceholderText(/name/i);
    const submitButton = screen.getByTestId('submit-button');
    expect(emailInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
