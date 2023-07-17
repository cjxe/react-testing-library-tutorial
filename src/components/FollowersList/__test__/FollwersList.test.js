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

describe('FollowersList', () => {
  it('should render one follower item', async () => {
    render(<MockFollowersList />);
    // there is a period of time where an element 
    // with the property `data-testid="follower-item-0"` doesn't exist
    const followerListElement = await screen.findByTestId("follower-item-0");
    expect(followerListElement).toBeInTheDocument();
  });

  it('should render multiple follower items', async () => {
    render(<MockFollowersList />);
    const followerListElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerListElements.length).toBe(5);
  });
})