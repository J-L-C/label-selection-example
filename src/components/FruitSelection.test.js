import { render, screen } from '@testing-library/react';
import FruitSelection from "./FruitSelection";

test('renders label for radio button options', () => {
  render(<FruitSelection />);
  const linkElement = screen.getByText(/what is your favorite fruit/i);
  expect(linkElement).toBeInTheDocument();
});

test('see radio button orange, strawberry, bananas ', () => {
  render(<FruitSelection />);
  const orangeButton = screen.getByRole("radio", {name: /orange/i } );
  expect(orangeButton).toBeInTheDocument();
  const strawberryButton = screen.getByRole("radio", {name: /strawberry/i } );
  expect(strawberryButton).toBeInTheDocument();
  const bananasButton = screen.getByRole("radio", {name: /bananas/i } );
  expect(bananasButton).toBeInTheDocument();
});
