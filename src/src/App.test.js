import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import  App from './App';

// test('check first div text', () => {
//   render(<PageIndex />)
//   const linkElement = screen.getByText(
//     /This is a sample page/
//   )
//   expect(linkElement).toBeInTheDocument();
// });


describe('App', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(()=> <App />);
    expect(asFragment()).toMatchSnapshot();
  });
});