import { render, screen } from '@testing-library/react';
import Header from '../Header';

// # Get by

it('should get same text passed into title group', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it('should get the header "My Header" out of all the other headers', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByRole("heading", {name: "My Header"}); // this test is particularly good because it mimics the user well
  expect(headingElement).toBeInTheDocument();
});

it('should get the header with the test id', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByTestId("header-1")
  expect(headingElement).toBeInTheDocument();
});

// # Find by

it('should find same text passed into title group', async () => {
  render(<Header title="My Header"/>);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// # Query by

it('should NOT find the text "luigi"', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.queryByText(/luigi/i);
  expect(headingElement).not.toBeInTheDocument();
});

// # Get all by

it('should get all headings', () => {
  render(<Header title="My Header"/>);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
