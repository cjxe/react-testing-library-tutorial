import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

// we had to introduce a mock component because `<TodoFooter>` has 
//  a component named `<Link>`. It should be used within another
// component called `<BrowserRouter>` 
const MockTodoFooter = ( {numberOfIncompleteTasks} ) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
  )
}

it('should render the correct amount of multiple incomplete tasks', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it('should render the correct amount of one incomplete task', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it('should render the correct amount of one incomplete task .', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).not.toBeFalsy();
});

it('should render AND see the correct amount of one incomplete task', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});

it('should render AND contain <p>', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML("p");
});

it('should be equal to "1 task left', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement.textContent).toBe("1 task left");
});

