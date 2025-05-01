import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../page';
import Homepage from '../../components/home/Homepage';

// Mock the Homepage component
jest.mock('../../components/home/Homepage', () => {
  return function MockHomepage() {
    return <div data-testid='mock-homepage'>Mocked Homepage</div>;
  };
});

describe('Page', () => {
  it('renders the Homepage component', () => {
    render(<Page />);
    expect(screen.getByTestId('mock-homepage')).toBeInTheDocument();
  });
});
