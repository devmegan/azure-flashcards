import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

test('renders w/o crashing', () => {
  render(<Hero />);
  const linkElement = screen.getByText(/Azure DevOps/i);
  expect(linkElement).toBeInTheDocument();
});
