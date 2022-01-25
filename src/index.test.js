import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import PageIndex from './index.js';

test('check first div text', () => {
  render(<PageIndex />)
  const linkElement = screen.getByText(
    /This is a sample page/
  )
  expect(linkElement).toBeInTheDocument();
});
