import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SpaceX Launch Programs', () => {
  render(<App />);
  const linkElement = screen.getByText(/SpaceX Launch Programs/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders SpaceX Launch Programs 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/SpaceX Launch Programs/i);
  expect(linkElement).toBeInTheDocument();
});
