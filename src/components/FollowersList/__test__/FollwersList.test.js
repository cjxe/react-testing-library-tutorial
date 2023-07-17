import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

jest.mock("axios");

describe('FollowersList', () => {
  beforeEach(() => {
    console.log("ran before each test")
  })

  beforeAll(() => {
    console.log("ran before ALL tests")
  })

  afterEach(() => {
    console.log("ran After each test")
  })

  afterAll(() => {
    console.log("ran After ALL tests")
  })

  it('should render one follower item 1', async () => {
    render(<MockFollowersList />);
    // there is a period of time where an element 
    // with the property `data-testid="follower-item-0"` doesn't exist
    const followerListElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerListElement).toBeInTheDocument();
  });

  it('should render one follower item 2', async () => {
    render(<MockFollowersList />);
    // there is a period of time where an element 
    // with the property `data-testid="follower-item-0"` doesn't exist
    const followerListElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerListElement).toBeInTheDocument();
  });

  // it('should render multiple follower items', async () => {
  //   render(<MockFollowersList />);
  //   const followerListElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerListElements.length).toBe(5);
  // });
})