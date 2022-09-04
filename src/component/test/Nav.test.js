import { render, screen } from '@testing-library/react';
import Nav from '../Nav';

test('renders w/o crashing', () => {
  render(<Nav />);
  const btns = screen.getAllByRole('button');
  expect(btns.length).toEqual(3);
});