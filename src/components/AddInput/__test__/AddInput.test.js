import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn(); // () => {}

describe('AddInput', () => {
  it('should render input element', () => {
    render(
      <AddInput 
        todos={[]}
        setTodos={mockedSetTodo}
      />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement).toBeInTheDocument();
  });

  it('should have empty input when add button is clicked', () => {
    render(
      <AddInput 
        todos={[]}
        setTodos={mockedSetTodo}
      />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const buttonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping"}});
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
})