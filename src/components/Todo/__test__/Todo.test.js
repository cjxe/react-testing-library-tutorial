import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText('Add a new task here...');
  const buttonElement = screen.getByRole("button", { name: "Add" });
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: {value: task}});
    fireEvent.click(buttonElement);
  })
}

// "integration test" because we are testing how <Todo> component interacts
// with <TodoList> component
describe('Todo', () => {
  it('should get a single Todo', () => {
    render(<MockTodo />);
    // const inputElement = screen.getByPlaceholderText('Add a new task here...');
    // const buttonElement = screen.getByRole("button", { name: "Add" });
    // fireEvent.change(inputElement, { target: {value: 'Go grocery shopping'}});
    // fireEvent.click(buttonElement);
    addTask(['Go grocery shopping']);
    const todoElement = screen.getByText('Go grocery shopping');
    expect(todoElement).toBeInTheDocument();
  });

  it('should get multiple components under <TodoList>', () => {
    render(<MockTodo />);
    addTask(['Go grocery shopping', "pey my cat", "cook dinner"]);
    const todoElements = screen.getAllByTestId("task-container");
    expect(todoElements.length).toBe(3)
  });

  it('should not have completed class when initially rendered', () => {
    render(<MockTodo />);
    addTask(['Go grocery shopping']);
    const todoElement = screen.getByText('Go grocery shopping');
    expect(todoElement).not.toHaveClass("todo-item-active");
  });

  it('should not have completed class when initially rendered BUT THEN should have completed class when clicked', () => {
    render(<MockTodo />);
    addTask(['Go grocery shopping']);
    const todoElement = screen.getByText('Go grocery shopping');
    fireEvent.click(todoElement);
    expect(todoElement).toHaveClass("todo-item-active");
  });
})